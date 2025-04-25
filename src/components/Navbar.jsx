import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Car, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Navigation links
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Inventory', path: '/inventory' },
    { name: 'Services', path: '/services' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  // Handle scroll event to change navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 bg-white shadow-md transition-all duration-300 ${
        isScrolled ? 'py-2' : 'py-4'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Car size={32} className="text-primary-600" />
            <span className="text-xl font-display font-bold text-primary-800">
              Prestige Auto
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-colors duration-200 ${
                  location.pathname === link.path
                    ? 'text-primary-600' // Active link color
                    : 'text-neutral-800 hover:text-primary-600' // Default black text with blue hover
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Admin Login Button */}
          <Link
            to="/admin/login"
            className="hidden md:block btn btn-outline border-primary-600 text-primary-600 hover:bg-primary-50"
          >
            Admin Login
          </Link>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden text-neutral-800"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-white border-t mt-2 animate-fade-in">
          <div className="container mx-auto px-4 py-3">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`py-2 px-4 rounded-md ${
                    location.pathname === link.path
                      ? 'bg-primary-50 text-primary-600'
                      : 'text-neutral-800 hover:bg-neutral-50'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/admin/login"
                className="btn btn-primary mt-2"
              >
                Admin Login
              </Link>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;