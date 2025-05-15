import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

function Navbar() {
  const location = useLocation();
  const currentPath = location.pathname;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-md">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8 py-3 flex justify-between items-center">
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 hover:text-orange-600 transition"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Left Nav Links */}
        <div className="hidden md:flex gap-6 items-center">
          <Link
            to="/"
            className={`text-lg font-medium ${
              currentPath === "/" ? "text-orange-600" : "text-gray-700"
            } hover:text-orange-500 transition`}
          >
            Acasă
          </Link>
          <Link
            to="/meniu"
            className={`text-lg font-medium ${
              currentPath === "/meniu" ? "text-orange-600" : "text-gray-700"
            } hover:text-orange-500 transition`}
          >
            Meniu
          </Link>
          <Link
            to="/despre-noi"
            className={`text-lg font-medium ${
              currentPath === "/despre-noi"
                ? "text-orange-600"
                : "text-gray-700"
            } hover:text-orange-500 transition`}
          >
            Despre Noi
          </Link>
          <Link
            to="/galerie"
            className={`text-lg font-medium ${
              currentPath === "/galerie" ? "text-orange-600" : "text-gray-700"
            } hover:text-orange-500 transition`}
          >
            Galerie
          </Link>
        </div>

        {/* Right Icons */}
        <div className="hidden md:flex gap-6 items-center">
          <Link
            to="/cumparaturi"
            className="text-gray-700 hover:text-orange-600 transition"
          >
            <img
              src="../src/assets/cart.png"
              alt="Shopping Cart"
              className="w-10"
            />
          </Link>
          <Link
            to="/login"
            className="text-gray-700 hover:text-orange-600 transition"
          >
            <img
              src="../src/assets/icons8-account.png"
              alt="User Account"
              className="w-12"
            />
          </Link>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col gap-4 px-6 pb-4 bg-white">
          <Link
            to="/"
            className={`text-lg font-medium ${
              currentPath === "/" ? "text-orange-600" : "text-gray-700"
            } hover:text-orange-500 transition`}
            onClick={() => setIsOpen(false)}
          >
            Acasă
          </Link>
          <Link
            to="/meniu"
            className={`text-lg font-medium ${
              currentPath === "/meniu" ? "text-orange-600" : "text-gray-700"
            } hover:text-orange-500 transition`}
            onClick={() => setIsOpen(false)}
          >
            Meniu
          </Link>
          <Link
            to="/despre-noi"
            className={`text-lg font-medium ${
              currentPath === "/despre-noi"
                ? "text-orange-600"
                : "text-gray-700"
            } hover:text-orange-500 transition`}
            onClick={() => setIsOpen(false)}
          >
            Despre Noi
          </Link>
          <Link
            to="/galerie"
            className={`text-lg font-medium ${
              currentPath === "/galerie" ? "text-orange-600" : "text-gray-700"
            } hover:text-orange-500 transition`}
            onClick={() => setIsOpen(false)}
          >
            Galerie
          </Link>
          <div className="flex gap-6 mt-2">
            <Link
              to="/cumparaturi"
              className="text-gray-700 hover:text-orange-600 transition"
              onClick={() => setIsOpen(false)}
            >
              <img
                src="../src/assets/cart.png"
                alt="Shopping Cart"
                className="w-10"
              />
            </Link>
            <Link
              to="/login"
              className="text-gray-700 hover:text-orange-600 transition"
              onClick={() => setIsOpen(false)}
            >
              <img
                src="../src/assets/icons8-account.png"
                alt="User Account"
                className="w-12"
              />
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
