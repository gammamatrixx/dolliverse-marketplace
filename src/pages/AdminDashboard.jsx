import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import useProductStore from '../lib/productState';

const AdminDashboard = () => {
  const { products, deleteProduct, carouselImages, addCarouselImage, removeCarouselImage } = useProductStore();
  const [newImageUrl, setNewImageUrl] = useState('');

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      deleteProduct(id);
    }
  };

  const handleAddCarouselImage = () => {
    if (newImageUrl) {
      addCarouselImage(newImageUrl);
      setNewImageUrl('');
    }
  };

  const handleRemoveCarouselImage = (index) => {
    removeCarouselImage(index);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">Admin Dashboard</h1>
          <Link to="/admin/add">
            <Button className="bg-green-500 hover:bg-green-600 text-white">Add New Product</Button>
          </Link>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Manage Carousel Images</h2>
          <div className="flex mb-4">
            <Input
              type="text"
              placeholder="Enter image URL"
              value={newImageUrl}
              onChange={(e) => setNewImageUrl(e.target.value)}
              className="flex-grow mr-2"
            />
            <Button onClick={handleAddCarouselImage}>Add Image</Button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {carouselImages.map((image, index) => (
              <div key={index} className="relative">
                <img src={image} alt={`Carousel ${index + 1}`} className="w-full h-40 object-cover rounded" />
                <Button
                  variant="destructive"
                  size="sm"
                  className="absolute top-2 right-2"
                  onClick={() => handleRemoveCarouselImage(index)}
                >
                  Remove
                </Button>
              </div>
            ))}
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-4">Product List</h2>
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {products.map((product) => (
                <TableRow key={product.id}>
                  <TableCell>{product.id}</TableCell>
                  <TableCell>{product.name}</TableCell>
                  <TableCell>${product.price.toFixed(2)}</TableCell>
                  <TableCell>{product.category}</TableCell>
                  <TableCell>
                    <Link to={`/admin/edit/${product.id}`}>
                      <Button variant="outline" className="mr-2">Edit</Button>
                    </Link>
                    <Button variant="destructive" onClick={() => handleDelete(product.id)}>Delete</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AdminDashboard;
