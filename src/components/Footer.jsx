import React from 'react';
import { Link } from 'react-router-dom';
import { Car, Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Car size={24} className="text-secondary-400" />
              <span className="text-xl font-display font-bold">Prestige Auto</span>
            </div>
            <p className="text-neutral-300 mb-6">
              Providing luxury vehicles and exceptional customer service since 2010. Your journey to automotive excellence starts here.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-neutral-300 hover:text-secondary-400 transition-colors duration-200">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-neutral-300 hover:text-secondary-400 transition-colors duration-200">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-neutral-300 hover:text-secondary-400 transition-colors duration-200">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'Inventory', 'Services', 'About Us', 'Contact', 'Admin Login'].map((item) => (
                <li key={item}>
                  <Link 
                    to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}
                    className="text-neutral-300 hover:text-white transition-colors duration-200"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              {[
                'New Vehicle Sales', 
                'Pre-owned Vehicles', 
                'Financing Options', 
                'Maintenance & Repairs', 
                'Parts & Accessories', 
                'Vehicle Trade-in'
              ].map((service) => (
                <li key={service} className="text-neutral-300 hover:text-white transition-colors duration-200">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-secondary-400 flex-shrink-0 mt-1" />
                <span className="text-neutral-300">123 Luxury Lane, Automotive City, AC 12345</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="text-secondary-400 flex-shrink-0" />
                <span className="text-neutral-300">(555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="text-secondary-400 flex-shrink-0" />
                <span className="text-neutral-300">info@prestigeauto.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-800 mt-12 pt-8 text-center text-neutral-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Prestige Auto. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;