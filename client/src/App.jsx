import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import RegisterPage from './pages/RegisterPage';
import LimitPage from './pages/LimitPage';
import UsagePage from './pages/UsagePage';
import DeletePage from './pages/DeletePage';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 flex flex-col">
        <Navbar />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/limits" element={<LimitPage />} />
            <Route path="/usage" element={<UsagePage />} />
            <Route path="/delete" element={<DeletePage />} />
          </Routes>
        </div>
        <footer className="text-center py-4 mt-12 text-gray-500 font-serif border-t border-gray-200 text-lg">
          Developed by <a href="https://github.com/devlohani99" target="_blank" rel="noopener noreferrer" className="text-blue-900 underline hover:text-yellow-700">devlohani99</a>
        </footer>
      </div>
    </Router>
  );
};

export default App;