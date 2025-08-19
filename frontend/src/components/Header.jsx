import { Link } from 'react-router-dom';

const Header = () => (
  <header className="bg-white shadow">
    <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold text-blue-600">Bachelor Solution</Link>
      <nav className="space-x-4">
        <Link to="/login" className="px-4 py-2 text-sm text-gray-600 hover:text-blue-600">Log in</Link>
        <Link
          to="/signup"
          className="px-4 py-2 text-sm bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Get started
        </Link>
      </nav>
    </div>
  </header>
);

export default Header;
