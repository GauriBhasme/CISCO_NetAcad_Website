import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HomePage } from './components/HomePage';
import { LoginPage } from './components/LoginPage';
import { RegisterPage } from './components/RegisterPage';
import { EventsPage } from './components/EventsPage';
import { ContactPage } from './components/ContactPage';
import { AboutPage } from './components/AboutPage';
import './styles/globals.css';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  // Pure JavaScript function - removed TypeScript type annotation
  const handleNavigate = (page) => {
    setCurrentPage(page);
    // Scroll to top when navigating to a new page
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={handleNavigate} />;
      case 'login':
        return <LoginPage onNavigate={handleNavigate} />;
      case 'register':
        return <RegisterPage onNavigate={handleNavigate} />;
      case 'events':
        return <EventsPage onNavigate={handleNavigate} />;
      case 'about':
        return <AboutPage onNavigate={handleNavigate} />;
      case 'contact':
        return <ContactPage onNavigate={handleNavigate} />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  const showNavbar = !['login', 'register'].includes(currentPage);

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation - Show on all pages except login and register */}
      {showNavbar && (
        <Navbar currentPage={currentPage} onNavigate={handleNavigate} />
      )}
      
      {/* Page Content */}
      <main className="w-full">
        {renderCurrentPage()}
      </main>
    </div>
  );
}