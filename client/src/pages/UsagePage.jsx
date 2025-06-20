import { useState } from 'react';
import useProjectStore from '../store/useProjectStore';

export default function UsagePage() {
  const { projectId, apiKey } = useProjectStore();
  const [inputProjectId, setInputProjectId] = useState(projectId || '');
  const [inputApiKey, setInputApiKey] = useState(apiKey || '');
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

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

  return (
    <div className="max-w-md mx-auto mt-16 p-8 bg-white border border-gray-300 rounded-lg shadow-lg font-serif">
      <h2 className="text-3xl font-bold mb-6 text-center text-blue-900 tracking-wide">Usage Stats</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <input
          type="text"
          className="w-full border border-gray-400 px-4 py-2 rounded focus:outline-none focus:border-blue-700 transition"
          placeholder="Project ID"
          value={inputProjectId}
          onChange={e => setInputProjectId(e.target.value)}
          required
        />
        <input
          type="text"
          className="w-full border border-gray-400 px-4 py-2 rounded focus:outline-none focus:border-blue-700 transition"
          placeholder="API Key"
          value={inputApiKey}
          onChange={e => setInputApiKey(e.target.value)}
          required
        />
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-blue-900 font-semibold py-2 rounded shadow hover:from-yellow-500 hover:to-yellow-700 border border-yellow-700 transition"
          disabled={loading}
        >
          {loading ? 'Fetching...' : 'Get Usage'}
        </button>
      </form>
      {error && <div className="text-red-600 mt-4 text-center">{error}</div>}
      {stats && (
        <div className="mt-6 bg-gray-100 text-gray-800 border border-gray-300 p-4 rounded text-center text-lg font-medium">
          <div><b>Used:</b> {stats.used}</div>
          <div><b>Remaining:</b> {stats.remaining}</div>
          <div><b>Reset In:</b> {Math.ceil(stats.resetIn / 1000)} seconds</div>
        </div>
      )}
    </div>
  );
} 