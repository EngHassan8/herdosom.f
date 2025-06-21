import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { CiMenuBurger } from 'react-icons/ci';
import { RxCross2 } from 'react-icons/rx';
import Logo from '../assets/Herdo.jpg';
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaClock,
  FaEnvelope,
} from 'react-icons/fa';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [TheOpen, setTheOpen] = useState(false);
  const [user, setUser] = useState(null);

  const navLinkClass = ({ isActive }) =>
    isActive ? 'text-blue-600 font-semibold' : 'hover:text-blue-600 transition-colors';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    window.location.href = "/";
  };

  return (
    <>
      {/* TOP BAR */}
      <div className="fixed top-0 left-0 w-full bg-blue-500 text-white text-sm flex justify-between items-center px-4 sm:px-10 py-2 z-40 h-12">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2"><FaClock /> Sat–Thur: 8:00AM – 6:00PM</div>
          <div className="flex items-center gap-2"><FaEnvelope /> info@herdosom.org</div>
        </div>
        <div className="hidden md:flex space-x-3 items-center">
          <span>Follow Us:</span>
          <FaFacebook className="hover:text-gray-200 cursor-pointer" />
          <FaTwitter className="hover:text-gray-200 cursor-pointer" />
        </div>
      </div>

      <div className="h-14" />

      {/* NAVBAR */}
      <nav className={`bg-white font-bold shadow-md px-4 md:px-10 py-4 flex justify-between items-center fixed left-0 w-full z-50 h-20 transition-all duration-300 ${isScrolled ? 'top-0' : 'top-12'}`}>
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src={Logo} alt="Logo" className="h-10 w-10 object-cover rounded-full" />
          <div className="font-bold text-blue-800 text-lg">HERDO</div>
        </div>

        {/* Nav Links - Desktop */}
        <ul className="hidden md:flex space-x-8 text-gray-700 font-bold">
          <li><NavLink to="/" className={navLinkClass}>Home</NavLink></li>
          <li><NavLink to="/about" className={navLinkClass}>About</NavLink></li>
          <li><NavLink to="/news" className={navLinkClass}>News</NavLink></li>
          <li><NavLink to="/contact" className={navLinkClass}>Contact</NavLink></li>
        </ul>

        {/* User Info or Sign Up - Desktop */}
        <div className="hidden md:flex items-center space-x-4">
          {user ? (
            <>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-blue-700 text-white rounded-full flex items-center justify-center font-bold text-sm shadow-md">
                  {user?.Name?.split(' ').slice(0, 2).map(n => n[0]?.toUpperCase()).join('')}
                </div>
                <span className="text-sm text-gray-700">
                  {user?.Name?.split(' ').slice(0, 2).join(' ')}
                </span>
              </div>
              <button
                onClick={handleLogout}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-1.5 rounded text-sm"
              >
                Logout
              </button>
            </>
          ) : (
            <button
              onClick={() => setTheOpen(!TheOpen)}
              className="bg-blue-600 text-white px-6 py-2 rounded shadow-lg hover:bg-blue-700 transition"
            >
              Get Started
            </button>
          )}
          {TheOpen && !user && (
            <div className="absolute top-20 right-10 bg-white shadow-lg border rounded-md">
              <NavLink to="/sign" className="block px-4 py-2 hover:bg-blue-100 text-sm text-gray-700">
                ➕ Sign Up
              </NavLink>
            </div>
          )}
        </div>

        {/* Hamburger Menu - Mobile */}
        <div className="md:hidden z-50">
          {isOpen ? (
            <RxCross2 onClick={() => setIsOpen(false)} className="text-3xl text-blue-800 cursor-pointer" />
          ) : (
            <CiMenuBurger onClick={() => setIsOpen(true)} className="text-3xl text-blue-800 cursor-pointer" />
          )}
        </div>

        {/* Mobile Menu Drawer */}
        {isOpen && (
          <div className="fixed inset-0 z-40">
            <div className="fixed top-0 left-0 h-full w-64 bg-white shadow-xl p-6 flex flex-col justify-between transition-transform duration-300">
              {/* Drawer Header */}
              <div>
                <div className="flex justify-between items-center mb-6">
                  <div className="flex items-center gap-3">
                    <img src={Logo} alt="Logo" className="h-12 w-12 object-cover rounded-full border-2 border-blue-700" />
                    <span className="text-blue-800 text-2xl font-extrabold tracking-wide">HERDO</span>
                  </div>
                  <RxCross2 onClick={() => setIsOpen(false)} className="text-3xl text-blue-800 cursor-pointer" />
                </div>

                {/* Drawer Links */}
                <ul className="flex flex-col space-y-4 font-semibold text-gray-900">
                  <li><NavLink to="/" onClick={() => setIsOpen(false)} className={({ isActive }) => isActive ? 'text-blue-700 font-bold' : 'hover:text-blue-600'}>🏠 Home</NavLink></li>
                  <li><NavLink to="/about" onClick={() => setIsOpen(false)} className={({ isActive }) => isActive ? 'text-blue-700 font-bold' : 'hover:text-blue-600'}>ℹ️ About</NavLink></li>
                  <li><NavLink to="/news" onClick={() => setIsOpen(false)} className={({ isActive }) => isActive ? 'text-blue-700 font-bold' : 'hover:text-blue-600'}>📰 News</NavLink></li>
                  <li><NavLink to="/contact" onClick={() => setIsOpen(false)} className={({ isActive }) => isActive ? 'text-blue-700 font-bold' : 'hover:text-blue-600'}>📬 Contact</NavLink></li>
                </ul>

                {/* Drawer User Info or Signup */}
                {user ? (
                  <div className="mt-6 px-5 py-3 border-t text-gray-700">
                    <div className="w-10 h-10 bg-blue-700 text-white rounded-full flex items-center justify-center font-bold text-sm shadow-md mb-2">
                      {user?.Name?.split(' ').slice(0, 2).map(n => n[0]?.toUpperCase()).join('')}
                    </div>
                    <p className="font-semibold">
                      {user?.Name?.split(' ').slice(0, 2).join(' ')}
                    </p>
                    <p className="text-sm text-gray-500">{user.Email}</p>
                    <button
                      onClick={handleLogout}
                      className="mt-3 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded text-sm"
                    >
                      Logout
                    </button>
                  </div>
                ) : (
                  <div className="mt-6">
                    <NavLink to="/sign" onClick={() => setIsOpen(false)} className="block bg-blue-600 text-white text-center py-2 rounded hover:bg-blue-700">
                      ➕ Sign Up
                    </NavLink>
                  </div>
                )}
              </div>

              {/* Social Icons Bottom */}
              <div className="mt-8 border-t pt-5">
                <p className="text-sm text-gray-600 mb-3 font-medium">Follow Us:</p>
                <div className="flex items-center space-x-6 text-2xl text-blue-700">
                  <FaFacebook />
                  <FaTwitter />
                  <FaInstagram />
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>

      <div className="h-20" />
    </>
  );
}
