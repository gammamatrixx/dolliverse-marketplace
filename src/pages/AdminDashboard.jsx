import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Table } from '@/components/ui/table';
import { Button } from '@/components/ui/button';

const dolls = [
  { id: 1, name: 'Rosie', price: 29.99, category: 'Clothing Dolls' },
  { id: 2, name: 'Daisy', price: 34.99, category: 'Baby Dolls' },
  { id: 3, name: 'Lily', price: 39.99, category: 'Animal Dolls' },
  { id: 4, name: 'Poppy', price: 27.99, category: 'Clothing Dolls' },
];

const AdminDashboard = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center">Admin Dashboard</h1>
        <div className="overflow-x-auto">
          <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
            <thead className="bg-gray-200">
              <tr>
                <th className="px-4 py-2">ID</th>
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Price</th>
                <th className="px-4 py-2">Category</th>
                <th className="px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {dolls.map((doll) => (
                <tr key={doll.id} className="border-b">
                  <td className="px-4 py-2">{doll.id}</td>
                  <td className="px-4 py-2">{doll.name}</td>
                  <td className="px-4 py-2">${doll.price.toFixed(2)}</td>
                  <td className="px-4 py-2">{doll.category}</td>
                  <td className="px-4 py-2">
                    <Button variant="outline" className="mr-2">Edit</Button>
                    <Button variant="destructive">Delete</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AdminDashboard;
