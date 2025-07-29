import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  
  const isActive = (path) => {
    return location.pathname === path ? 'text-yellow-400' : 'hover:text-yellow-400';
  };

  return (
    <nav className="bg-blue-900 text-white px-6 py-4 shadow-md">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center mb-4 md:mb-0">
          <Link to="/" className="font-serif text-2xl font-bold tracking-wider">
            Ratelim
          </Link>
        </div>
        
        <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            <Link to="/guide" className={`transition ${isActive('/guide')}`}>
              Guide
            </Link>
            <Link to="/register" className={`transition ${isActive('/register')}`}>
              Register Project
            </Link>
            <Link to="/limits" className={`transition ${isActive('/limits')}`}>
              Set Limits
            </Link>
            <Link to="/usage" className={`transition ${isActive('/usage')}`}>
              Usage Stats
            </Link>
            <Link to="/contact" className={`transition ${isActive('/contact')}`}>
              Contact
            </Link>
          </div>
          
          <div className="hidden md:block border-l border-blue-700 h-6 mx-2"></div>
          
          <div className="flex items-center space-x-4">
            <a 
              href="https://github.com/devlohani99/ratelim" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition"
              aria-label="GitHub"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;