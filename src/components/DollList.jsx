import React from 'react';
import { DollCard } from './DollCard';
import useProductStore from '../lib/productState';

export const DollList = ({ category }) => {
  const { products } = useProductStore();
  
  const filteredDolls = category
    ? products.filter(doll => doll.category === category)
    : products;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {filteredDolls.map((doll) => (
        <DollCard key={doll.id} doll={doll} />
      ))}
    </div>
  );
};
