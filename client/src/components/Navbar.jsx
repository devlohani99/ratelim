import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-blue-900 text-white px-8 py-4 flex justify-between items-center shadow border-b-4 border-yellow-400">
      <div className="font-serif font-bold text-2xl tracking-widest">
        <Link to="/">Ratelim</Link>
      </div>
      <div className="space-x-8 text-lg font-medium">
        <Link to="/register" className="hover:text-yellow-400 transition">Register Project</Link>
        <Link to="/limits" className="hover:text-yellow-400 transition">Set Limits</Link>
        <Link to="/usage" className="hover:text-yellow-400 transition">Usage Stats</Link>
        <Link to="/delete" className="hover:text-yellow-400 transition">Delete Project</Link>
      </div>
    </nav>
  );
} 