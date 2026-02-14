import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-8 py-4  bg-blue-600
 text-white">
      <h1 className="text-2xl font-bold">QuickMart</h1>

      <div className="space-x-6">
        <Link to="/">Home</Link>
        <Link to="/products-page">Products</Link>
        <Link to="/about">About</Link>
      </div>
    </nav>
  );
};

export default Navbar;
