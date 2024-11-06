import React from 'react';
import { Menu, X, Wand2 } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-indigo-900 text-white fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Wand2 className="h-8 w-8 text-indigo-400" />
            <span className="ml-2 text-xl font-bold">NS Magic.store</span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#services" className="hover:bg-indigo-800 px-3 py-2 rounded-md">Services</a>
              <a href="#about" className="hover:bg-indigo-800 px-3 py-2 rounded-md">About</a>
              <a href="#contact" className="bg-indigo-500 hover:bg-indigo-600 px-4 py-2 rounded-md">Contact Us</a>
            </div>
          </div>
          
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#services" className="block hover:bg-indigo-800 px-3 py-2 rounded-md">Services</a>
            <a href="#about" className="block hover:bg-indigo-800 px-3 py-2 rounded-md">About</a>
            <a href="#contact" className="block bg-indigo-500 hover:bg-indigo-600 px-4 py-2 rounded-md">Contact Us</a>
          </div>
        </div>
      )}
    </nav>
  );
}