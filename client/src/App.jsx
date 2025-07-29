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

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 flex flex-col">
        <Navbar />
        {/* Top Banner Ad */}
        <div className="w-full bg-white shadow">
          <div className="container mx-auto px-4 py-2">
            <AdSenseAd 
              slot="YOUR_TOP_BANNER_SLOT"
              format="auto"
              responsive={true}
              className="w-full"
            />
          </div>
        </div>
        <div className="flex-1 flex">
          {/* Left Sidebar Ad - Desktop Only */}
          <div className="hidden md:block w-48 flex-shrink-0 p-4">
            <div className="sticky top-4">
              <AdSenseAd 
                slot="YOUR_LEFT_SIDEBAR_SLOT"
                format="vertical"
                responsive={false}
                style={{ width: '160px', height: '600px' }}
                className="mx-auto"
              />
            </div>
          </div>
          
          {/* Main Content */}
          <div className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/limits" element={<LimitPage />} />
            <Route path="/usage" element={<UsagePage />} />
            <Route path="/delete" element={<DeletePage />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfService />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
          
          {/* In-Content Ad */}
          <div className="container mx-auto px-4 py-8">
            <AdSenseAd 
              slot="YOUR_IN_CONTENT_SLOT"
              format="auto"
              responsive={true}
              className="w-full my-8"
            />
          </div>
          
          </div>
          
          {/* Right Sidebar Ad - Desktop Only */}
          <div className="hidden md:block w-48 flex-shrink-0 p-4">
            <div className="sticky top-4">
              <AdSenseAd 
                slot="YOUR_RIGHT_SIDEBAR_SLOT"
                format="vertical"
                responsive={false}
                style={{ width: '160px', height: '600px' }}
                className="mx-auto"
              />
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