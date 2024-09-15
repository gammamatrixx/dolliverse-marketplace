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
        <Table>
          <Table.Header>
            <Table.Row>
              <Table.Head>ID</Table.Head>
              <Table.Head>Name</Table.Head>
              <Table.Head>Price</Table.Head>
              <Table.Head>Category</Table.Head>
              <Table.Head>Actions</Table.Head>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {dolls.map((doll) => (
              <Table.Row key={doll.id}>
                <Table.Cell>{doll.id}</Table.Cell>
                <Table.Cell>{doll.name}</Table.Cell>
                <Table.Cell>${doll.price.toFixed(2)}</Table.Cell>
                <Table.Cell>{doll.category}</Table.Cell>
                <Table.Cell>
                  <Button variant="outline" className="mr-2">Edit</Button>
                  <Button variant="destructive">Delete</Button>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </main>
      <Footer />
    </div>
  );
};

export default AdminDashboard;