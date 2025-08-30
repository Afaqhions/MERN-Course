import { Facebook, Twitter, Instagram, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About */}
        <div>
          <h2 className="text-xl font-bold mb-3">StudentMS</h2>
          <p className="text-gray-200 text-sm leading-relaxed">
            A modern student management system to manage students,
            teachers, classes, and reports seamlessly.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Quick Links</h2>
          <ul className="space-y-2 text-gray-200 text-sm">
            <li><a href="#" className="hover:text-white transition">Dashboard</a></li>
            <li><a href="#" className="hover:text-white transition">Students</a></li>
            <li><a href="#" className="hover:text-white transition">Teachers</a></li>
            <li><a href="#" className="hover:text-white transition">Reports</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Contact</h2>
          <p className="text-gray-200 text-sm">123 Main Street, Lahore, Pakistan</p>
          <p className="text-gray-200 text-sm">Phone: +92 300 1234567</p>
          <p className="text-gray-200 text-sm flex items-center gap-2">
            <Mail className="w-4 h-4" /> support@studentms.com
          </p>
        </div>

        {/* Socials */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Follow Us</h2>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-300"><Facebook /></a>
            <a href="#" className="hover:text-gray-300"><Twitter /></a>
            <a href="#" className="hover:text-gray-300"><Instagram /></a>
            <a href="#" className="hover:text-gray-300"><Linkedin /></a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/20 mt-6 py-4 text-center text-gray-300 text-sm">
        © {new Date().getFullYear()} StudentMS. All rights reserved.
      </div>
    </footer>
  );
}
