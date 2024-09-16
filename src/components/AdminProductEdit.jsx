import React from 'react';
import { useParams } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import AdminProductForm from './AdminProductForm';
import useProductStore from '../lib/productState';

const AdminProductEdit = () => {
  const { id } = useParams();
  const { products } = useProductStore();
  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col bg-gray-100">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8">
          <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-4">Edit Product</h1>
        <AdminProductForm product={product} mode="edit" />
      </main>
      <Footer />
    </div>
  );
};

export default AdminProductEdit;
