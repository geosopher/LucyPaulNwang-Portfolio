import React from 'react';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-navy text-white pt-16 pb-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col items-center text-center">
        
        <h2 className="text-3xl font-serif font-bold mb-2">Lucy Paul Nwang</h2>
        <p className="text-tiffany font-medium mb-8">
          Administrative Manager | Executive Assistant | Virtual Assistant
        </p>

        {/* Decorative divider */}
        <div className="w-24 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent mb-8"></div>

        <button 
          onClick={scrollToTop}
          className="w-12 h-12 bg-white/5 hover:bg-tiffany hover:text-white rounded-full flex items-center justify-center transition-all duration-300 mb-8 border border-white/10"
          aria-label="Back to top"
        >
          <ArrowUp size={20} />
        </button>

        <p className="text-sm text-gray-400">
          Copyright © {new Date().getFullYear()} All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
