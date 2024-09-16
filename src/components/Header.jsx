import React from 'react';
import { ShoppingCart, UserCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { navItems } from '../nav-items';
import useProductStore from '../lib/productState';
import { Button } from '@/components/ui/button';

export const Header = () => {
  const { cart, user, logout } = useProductStore();
  const cartItemCount = cart.length;

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
        <div className="flex items-center space-x-4">
          <Link to="/cart" className="text-gray-600 hover:text-pink-600 relative">
            <ShoppingCart className="h-6 w-6" />
            {cartItemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-pink-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                {cartItemCount}
              </span>
            )}
          </Link>
          {user ? (
            <div className="flex items-center space-x-2">
              <UserCircle className="h-6 w-6" />
              <span>{user.username}</span>
              <Button variant="outline" size="sm" onClick={logout}>Logout</Button>
            </div>
          ) : (
            <div className="flex space-x-2">
              <Link to="/login">
                <Button variant="outline" size="sm">Login</Button>
              </Link>
              <Link to="/register">
                <Button variant="outline" size="sm">Register</Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
