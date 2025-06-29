import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navigation() {
  const location = useLocation();

  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-8">
            <Link 
              to="/" 
              className={`text-lg font-medium transition-colors ${
                location.pathname === '/' 
                  ? 'text-rose-600' 
                  : 'text-gray-700 hover:text-rose-600'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/consulting" 
              className={`text-lg font-medium transition-colors ${
                location.pathname === '/consulting' 
                  ? 'text-rose-600' 
                  : 'text-gray-700 hover:text-rose-600'
              }`}
            >
              Consulting
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
} 