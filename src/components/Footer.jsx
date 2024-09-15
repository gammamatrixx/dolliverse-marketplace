import React from 'react';

export const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; 2023 Doll Delights. All rights reserved.</p>
        <div className="mt-2">
          <a href="/privacy" className="text-gray-300 hover:text-white mx-2">Privacy Policy</a>
          <a href="/terms" className="text-gray-300 hover:text-white mx-2">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};