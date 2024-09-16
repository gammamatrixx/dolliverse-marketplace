import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import useProductStore from '../lib/productState';

export const DollCard = ({ doll }) => {
  const addToCart = useProductStore((state) => state.addToCart);

  const handleAddToCart = (e) => {
    e.preventDefault();
    addToCart(doll);
  };

  return (
    <Link to={`/product/${doll.id}`} className="bg-white rounded-lg shadow-md overflow-hidden block">
      <img src={doll.image} alt={doll.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{doll.name}</h2>
        <p className="text-gray-600 mb-4">${doll.price.toFixed(2)}</p>
        <Button className="w-full bg-pink-500 hover:bg-pink-600 text-white" onClick={handleAddToCart}>
          Add to Cart
        </Button>
      </div>
    </Link>
  );
};
