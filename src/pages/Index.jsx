import React from 'react';
import { DollList } from '../components/DollList';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Carousel } from '../components/Carousel';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center">Welcome to Doll Delights</h1>
        <Carousel />
        <h2 className="text-3xl font-bold my-8 text-center">Our Handmade Dolls</h2>
        <DollList />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
