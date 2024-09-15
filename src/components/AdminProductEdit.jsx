import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Header } from './Header';
import { Footer } from './Footer';
import useProductStore from '../lib/productState';

const AdminProductEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { products, updateProduct } = useProductStore();
  const [product, setProduct] = useState({
    id: '',
    name: '',
    price: '',
    category: ''
  });

  useEffect(() => {
    const productToEdit = products.find(p => p.id === parseInt(id));
    if (productToEdit) {
      setProduct(productToEdit);
    }
  }, [id, products]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct(prev => ({ ...prev, [name]: value }));
  };

  const handleCategoryChange = (value) => {
    setProduct(prev => ({ ...prev, category: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateProduct({ ...product, price: parseFloat(product.price) });
    navigate('/admin');
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-4">Edit Product</h1>
        <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-lg shadow">
          <div>
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              name="name"
              value={product.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <Label htmlFor="price">Price</Label>
            <Input
              id="price"
              name="price"
              type="number"
              step="0.01"
              value={product.price}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <Label htmlFor="category">Category</Label>
            <Select onValueChange={handleCategoryChange} value={product.category}>
              <SelectTrigger>
                <SelectValue placeholder="Select a category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Clothing Dolls">Clothing Dolls</SelectItem>
                <SelectItem value="Baby Dolls">Baby Dolls</SelectItem>
                <SelectItem value="Animal Dolls">Animal Dolls</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button type="submit">Save Changes</Button>
        </form>
      </main>
      <Footer />
    </div>
  );
};

export default AdminProductEdit;
