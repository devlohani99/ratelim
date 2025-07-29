import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import RegisterPage from './pages/RegisterPage';
import LimitPage from './pages/LimitPage';
import UsagePage from './pages/UsagePage';
import DeletePage from './pages/DeletePage';
import AdSenseAd from './components/ads/AdSenseAd';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import ContactPage from './pages/ContactPage';
import GuidePage from './pages/GuidePage';
const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 flex flex-col">
        <Navbar />
        
        {/* Top Banner Ad - Only on main content pages */}
        {['/', '/guide', '/limits', '/usage'].includes(window.location.pathname) && (
          <div className="w-full bg-white shadow">
            <div className="container mx-auto px-4 py-2">
              <div className="ad-container">
                <p className="text-xs text-gray-500 text-center mb-1">Advertisement</p>
                <AdSenseAd 
                  slot="YOUR_TOP_BANNER_SLOT"
                  format="auto"
                  responsive={true}
                  className="w-full"
                />
              </div>
            </div>
          </div>
        )}

        <div className="flex-1 flex flex-col md:flex-row max-w-7xl mx-auto w-full px-4 py-6">
          {/* Left Sidebar Ad - Desktop Only */}
          <div className="hidden md:block w-48 flex-shrink-0 pr-4">
            <div className="sticky top-24">
              <div className="ad-container bg-white p-2 rounded shadow-sm">
                <p className="text-xs text-gray-500 text-center mb-1">Advertisement</p>
                <AdSenseAd 
                  slot="YOUR_LEFT_SIDEBAR_SLOT"
                  format="vertical"
                  responsive={false}
                  style={{ width: '160px', height: '600px' }}
                  className="mx-auto"
                />
              </div>
            </div>
          </div>
          
          {/* Main Content */}
          <div className="flex-1 min-w-0">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/limits" element={<LimitPage />} />
                <Route path="/usage" element={<UsagePage />} />
                <Route path="/delete" element={<DeletePage />} />
                <Route path="/privacy" element={<PrivacyPolicy />} />
                <Route path="/terms" element={<TermsOfService />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/guide" element={<GuidePage />} />
              </Routes>
            </div>
            
            {/* In-Content Ad - Only shown on content-rich pages */}
            {['/', '/guide', '/limits', '/usage'].includes(window.location.pathname) && (
              <div className="mt-6">
                <div className="ad-container bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                  <p className="text-xs text-gray-500 text-center mb-2">Advertisement</p>
                  <AdSenseAd 
                    slot="YOUR_IN_CONTENT_SLOT"
                    format="auto"
                    responsive={true}
                    className="w-full"
                  />
                </div>
              </div>
            )}
          </div>
          
          {/* Right Sidebar Ad - Desktop Only */}
          <div className="hidden md:block w-48 flex-shrink-0 pl-4">
            <div className="sticky top-24 space-y-6">
              <div className="ad-container bg-white p-2 rounded shadow-sm">
                <p className="text-xs text-gray-500 text-center mb-1">Advertisement</p>
                <AdSenseAd 
                  slot="YOUR_RIGHT_SIDEBAR_SLOT"
                  format="vertical"
                  responsive={false}
                  style={{ width: '160px', height: '600px' }}
                  className="mx-auto"
                />
              </div>
              
              {/* Additional Ad Unit */}
              <div className="ad-container bg-white p-2 rounded shadow-sm">
                <p className="text-xs text-gray-500 text-center mb-1">Advertisement</p>
                <AdSenseAd 
                  slot="YOUR_RIGHT_SIDEBAR_SLOT_2"
                  format="rectangle"
                  responsive={false}
                  style={{ width: '160px', height: '300px' }}
                  className="mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
        <footer className="text-center py-4 mt-12 text-gray-500 font-serif border-t border-gray-200 text-lg">
          Developed by <a href="https://github.com/devlohani99" target="_blank" rel="noopener noreferrer" className="text-blue-900 underline hover:text-yellow-700">devlohani99</a>
        </footer>
      </div>
    </Router>
  );
};

export default App;