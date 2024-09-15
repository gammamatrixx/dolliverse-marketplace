import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { DollList } from '../components/DollList';

const ClothingDolls = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center">Clothing Dolls</h1>
        <DollList category="Clothing Dolls" />
      </main>
      <Footer />
    </div>
  );
};

export default ClothingDolls;
