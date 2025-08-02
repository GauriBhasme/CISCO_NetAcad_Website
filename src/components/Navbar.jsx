import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';

// Navbar component props:
// - currentPage: string - the currently active page
// - onNavigate: function - callback to navigate to a different page
export function Navbar({ currentPage, onNavigate }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'Events', id: 'events' },
    { name: 'About', id: 'about' },
    { name: 'Contact Us', id: 'contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand Name */}
          <div className="flex-shrink-0">
            <button onClick={() => onNavigate('home')} className="flex flex-col">
              <h2 className={`text-lg font-bold transition-colors duration-200 leading-tight cursor-pointer ${
                isScrolled ? 'text-primary' : 'text-white'
              }`}>
                Cisco NetAcad
              </h2>
              <span className={`text-xs font-medium transition-colors duration-200 ${
                isScrolled ? 'text-gray-600' : 'text-blue-200'
              }`}>
                @ Campus
              </span>
            </button>
          </div>

          {/* Desktop Navigation - Right Aligned */}
          <div className="hidden md:flex items-center space-x-6">
            {/* Navigation Links */}
            <div className="flex items-baseline space-x-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className={`px-3 py-2 text-sm font-medium transition-all duration-200 hover:text-primary relative group ${
                    currentPage === item.id
                      ? 'text-primary'
                      : isScrolled
                      ? 'text-gray-700 hover:text-primary'
                      : 'text-white hover:text-blue-200'
                  }`}
                >
                  {item.name}
                  <span
                    className={`absolute bottom-0 left-0 w-full h-0.5 bg-primary transform transition-transform duration-200 ${
                      currentPage === item.id ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                    }`}
                  />
                </button>
              ))}
            </div>

            {/* Login and Register Buttons */}
            <div className="flex items-center space-x-3">
              <Button
                onClick={() => onNavigate('login')}
                variant={currentPage === 'login' ? 'default' : 'ghost'}
                className={`transition-all duration-200 ${
                  currentPage === 'login'
                    ? 'bg-primary text-white'
                    : isScrolled
                    ? 'text-gray-700 hover:text-primary hover:bg-primary/10'
                    : 'text-white hover:text-blue-200 hover:bg-white/10'
                }`}
              >
                Login
              </Button>
              <Button
                onClick={() => onNavigate('register')}
                variant={currentPage === 'register' ? 'default' : 'outline'}
                className={`transition-all duration-200 ${
                  currentPage === 'register'
                    ? 'bg-primary text-white border-primary'
                    : isScrolled
                    ? 'border-primary text-primary hover:bg-primary hover:text-white'
                    : 'border-white text-white hover:bg-white hover:text-primary'
                }`}
              >
                Register
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 transition-colors duration-200 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white/95 backdrop-blur-md rounded-lg mt-2 shadow-lg">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onNavigate(item.id);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`block px-3 py-2 text-base font-medium w-full text-left transition-colors duration-200 rounded-md ${
                    currentPage === item.id
                      ? 'text-primary bg-blue-50'
                      : 'text-gray-700 hover:text-primary hover:bg-blue-50'
                  }`}
                >
                  {item.name}
                </button>
              ))}
              <div className="flex flex-col space-y-2 pt-4 border-t border-gray-200">
                <Button
                  onClick={() => {
                    onNavigate('login');
                    setIsMobileMenuOpen(false);
                  }}
                  variant="ghost"
                  className="w-full text-gray-700 hover:text-primary hover:bg-blue-50"
                >
                  Login
                </Button>
                <Button
                  onClick={() => {
                    onNavigate('register');
                    setIsMobileMenuOpen(false);
                  }}
                  variant="outline"
                  className="w-full border-primary text-primary hover:bg-primary hover:text-white"
                >
                  Register
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}