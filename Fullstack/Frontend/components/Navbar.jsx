import { useState } from "react";
import { Menu, X, GraduationCap } from "lucide-react";
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-indigo-700 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <GraduationCap className="h-8 w-8 text-white" />
            <span className="text-white font-bold text-xl">
              StudentMS
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="text-white hover:text-gray-200 transition">
              Dashboard
            </Link>
            <Link to="/add-student" className="text-white hover:text-gray-200 transition">
              Add Student
            </Link>
            <Link to="/delete-student" className="text-white hover:text-gray-200 transition">
              Delete Student
            </Link>
            <Link to="/edit-student" className="text-white hover:text-gray-200 transition">
              Update Student
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-blue-700">
          
          <Link to="/" className="block px-4 py-2 text-white hover:bg-blue-600">
              Dashboard
            </Link>
            <Link to="/add-student" className="block px-4 py-2 text-white hover:bg-blue-600">
              Add Student
            </Link>
            <Link to="/delete-student" className="block px-4 py-2 text-white hover:bg-blue-600">
              Delete Student
            </Link>
            <Link to="/edit-student" className="block px-4 py-2 text-white hover:bg-blue-600">
              Update Student
            </Link>
        </div>
      )}
    </nav>
  );
}
