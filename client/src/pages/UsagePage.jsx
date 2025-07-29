import { useState, useEffect } from 'react';
import useProjectStore from '../store/useProjectStore';
import { FiRefreshCw, FiAlertCircle, FiInfo, FiClock, FiActivity, FiBarChart2 } from 'react-icons/fi';

export default function UsagePage() {
  const { projectId, apiKey } = useProjectStore();
  const [inputProjectId, setInputProjectId] = useState(projectId || '');
  const [inputApiKey, setInputApiKey] = useState(apiKey || '');
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [timeLeft, setTimeLeft] = useState('');

  // Format time remaining
  const formatTime = (seconds) => {
    if (!seconds) return '';
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    
    if (hours > 0) return `${hours}h ${minutes}m`;
    if (minutes > 0) return `${minutes}m ${secs}s`;
    return `${secs}s`;
  };

  // Update countdown timer
  useEffect(() => {
    if (!stats?.resetIn) return;
    
    let remaining = Math.ceil(stats.resetIn / 1000);
    setTimeLeft(formatTime(remaining));
    
    const timer = setInterval(() => {
      remaining -= 1;
      setTimeLeft(formatTime(remaining));
      
      if (remaining <= 0) {
        clearInterval(timer);
      }
    }, 1000);
    
    return () => clearInterval(timer);
  }, [stats]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setStats(null);
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/usage/${inputProjectId}`, {
        headers: { 'x-api-key': inputApiKey },
      });
      let data;
      try {
        data = await res.json();
      } catch {
        throw new Error('Server error: Could not parse response');
      }
      if (!res.ok) throw new Error(data.error || 'Failed to fetch usage');
      setStats(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Calculate usage percentage
  const usagePercentage = stats ? Math.round((stats.used / (stats.used + stats.remaining)) * 100) : 0;

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
          API Usage Dashboard
        </h1>
        <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
          Monitor and manage your API usage in real-time. Track requests, view analytics, and optimize your integration.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Usage Form */}
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <FiActivity className="mr-2 text-blue-600" />
              Check Usage
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="projectId" className="block text-sm font-medium text-gray-700 mb-1">
                  Project ID
                </label>
                <input
                  id="projectId"
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  placeholder="project-123"
                  value={inputProjectId}
                  onChange={e => setInputProjectId(e.target.value)}
                  required
                />
              </div>
              
              <div>
                <label htmlFor="apiKey" className="block text-sm font-medium text-gray-700 mb-1">
                  API Key
                </label>
                <input
                  id="apiKey"
                  type="password"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  placeholder="••••••••••••"
                  value={inputApiKey}
                  onChange={e => setInputApiKey(e.target.value)}
                  required
                />
              </div>
              
              <button
                type="submit"
                className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <FiRefreshCw className="animate-spin -ml-1 mr-2 h-4 w-4" />
                    Loading...
                  </>
                ) : (
                  'Check Usage'
                )}
              </button>
            </form>
            
            {error && (
              <div className="mt-4 p-3 bg-red-50 border-l-4 border-red-400 text-red-700 rounded">
                <div className="flex">
                  <FiAlertCircle className="h-5 w-5 text-red-400 mr-2" />
                  <p>{error}</p>
                </div>
              </div>
            )}
            
            {stats && (
              <div className="mt-8">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Current Usage</h3>
                
                {/* Usage Progress Bar */}
                <div className="mb-6">
                  <div className="flex justify-between text-sm text-gray-600 mb-1">
                    <span>0%</span>
                    <span>50%</span>
                    <span>100%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div 
                      className={`h-2.5 rounded-full ${
                        usagePercentage > 80 ? 'bg-red-500' : 'bg-blue-600'
                      }`}
                      style={{ width: `${Math.min(usagePercentage, 100)}%` }}
                    ></div>
                  </div>
                  <div className="mt-1 text-right text-sm text-gray-500">
                    {usagePercentage}% of limit used
                  </div>
                </div>
                
                {/* Usage Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                  <div className="bg-blue-50 p-4 rounded-lg text-center">
                    <div className="text-3xl font-bold text-blue-700">{stats.used}</div>
                    <div className="text-sm text-gray-600 mt-1">Requests Used</div>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg text-center">
                    <div className="text-3xl font-bold text-green-700">{stats.remaining}</div>
                    <div className="text-sm text-gray-600 mt-1">Requests Remaining</div>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg text-center">
                    <div className="text-3xl font-bold text-purple-700">{timeLeft}</div>
                    <div className="text-sm text-gray-600 mt-1">Until Reset</div>
                  </div>
                </div>
              </div>
            )}
          </div>
          
          {/* Usage History Section */}
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <FiBarChart2 className="mr-2 text-blue-600" />
              Usage History
            </h2>
            <div className="text-center py-12 text-gray-500">
              <p>Connect your account to view detailed usage history and analytics.</p>
              <button className="mt-4 text-blue-600 hover:text-blue-800 text-sm font-medium">
                Connect Account →
              </button>
            </div>
          </div>
        </div>
        
        {/* Sidebar */}
        <div className="space-y-6">
          {/* Tips Card */}
          <div className="bg-white shadow rounded-lg p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
              <FiInfo className="mr-2 text-blue-600" />
              Usage Tips
            </h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                Monitor your usage to avoid hitting rate limits
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                Consider upgrading your plan if you're consistently near your limit
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                Implement caching to reduce API calls
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                Check our documentation for optimization tips
              </li>
            </ul>
          </div>
          
          {/* Documentation Card */}
          <div className="bg-blue-50 rounded-lg p-6">
            <h3 className="text-lg font-medium text-blue-900 mb-3">Need Help?</h3>
            <p className="text-sm text-blue-800 mb-4">
              Check out our comprehensive documentation for guides, API references, and examples.
            </p>
            <button className="w-full bg-white text-blue-700 py-2 px-4 rounded-md text-sm font-medium hover:bg-blue-100 transition-colors">
              View Documentation
            </button>
          </div>
          
          {/* Status Card */}
          <div className="bg-white shadow rounded-lg p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">API Status</h3>
            <div className="flex items-center text-sm">
              <div className="h-2 w-2 rounded-full bg-green-500 mr-2"></div>
              <span className="text-green-700 font-medium">All Systems Operational</span>
            </div>
            <div className="mt-6 text-sm text-gray-700">
              <p className="mb-2">Last updated: Just now</p>
              <p>Next scheduled maintenance: None</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}