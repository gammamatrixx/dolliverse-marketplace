import React from 'react';
import { Button } from '@/components/ui/button';

export const DollCard = ({ doll }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={doll.image} alt={doll.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{doll.name}</h2>
        <p className="text-gray-600 mb-4">${doll.price.toFixed(2)}</p>
        <Button className="w-full bg-pink-500 hover:bg-pink-600 text-white">
          Add to Cart
        </Button>
      </div>
    </div>
  );
};