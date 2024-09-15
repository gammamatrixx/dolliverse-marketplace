import React from 'react';
import { ShoppingCart } from 'lucide-react';

export const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-pink-600">Doll Delights</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="/" className="text-gray-600 hover:text-pink-600">Home</a></li>
            <li><a href="/about" className="text-gray-600 hover:text-pink-600">About</a></li>
            <li><a href="/contact" className="text-gray-600 hover:text-pink-600">Contact</a></li>
          </ul>
        </nav>
        <button className="text-gray-600 hover:text-pink-600">
          <ShoppingCart className="h-6 w-6" />
        </button>
      </div>
    </header>
  );
};