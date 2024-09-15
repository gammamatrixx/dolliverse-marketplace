import React from 'react';
import { DollList } from '../components/DollList';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center">Handmade Dolls</h1>
        <DollList />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
