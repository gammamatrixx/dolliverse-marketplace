import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { navItems } from '../nav-items';

export const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-pink-600">Doll Delights</Link>
        <nav>
          <ul className="flex space-x-4">
            {navItems.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="text-gray-600 hover:text-pink-600 flex items-center">
                  {item.icon}
                  <span className="ml-1">{item.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <button className="text-gray-600 hover:text-pink-600">
          <ShoppingCart className="h-6 w-6" />
        </button>
      </div>
    </header>
  );
};
