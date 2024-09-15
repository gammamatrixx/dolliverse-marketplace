import React from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ShirtIcon, BabyIcon, DogIcon } from 'lucide-react';

const categories = [
  { name: 'Clothing Dolls', icon: <ShirtIcon className="h-12 w-12" />, link: '/categories/clothing' },
  { name: 'Baby Dolls', icon: <BabyIcon className="h-12 w-12" />, link: '/categories/baby' },
  { name: 'Animal Dolls', icon: <DogIcon className="h-12 w-12" />, link: '/categories/animal' },
];

const Categories = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center">Doll Categories</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link key={category.name} to={category.link} className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center justify-center hover:shadow-lg transition-shadow">
              {category.icon}
              <h2 className="text-xl font-semibold mt-4">{category.name}</h2>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Categories;