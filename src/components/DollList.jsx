import React from 'react';
import { DollCard } from './DollCard';

const dolls = [
  { id: 1, name: 'Rosie', price: 29.99, image: '/placeholder.svg' },
  { id: 2, name: 'Daisy', price: 34.99, image: '/placeholder.svg' },
  { id: 3, name: 'Lily', price: 39.99, image: '/placeholder.svg' },
  { id: 4, name: 'Poppy', price: 27.99, image: '/placeholder.svg' },
];

export const DollList = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {dolls.map((doll) => (
        <DollCard key={doll.id} doll={doll} />
      ))}
    </div>
  );
};