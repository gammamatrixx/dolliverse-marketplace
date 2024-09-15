import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const AdminProductEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState({
    id: id,
    name: '',
    price: '',
    category: ''
  });

  // In a real application, you would fetch the product data here based on the id

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct(prev => ({ ...prev, [name]: value }));
  };

  const handleCategoryChange = (value) => {
    setProduct(prev => ({ ...prev, category: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the updated product data to your backend
    console.log('Updated product:', product);
    // Navigate back to the admin dashboard after saving
    navigate('/admin');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Edit Product</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
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
    </div>
  );
};

export default AdminProductEdit;