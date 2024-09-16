import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import useProductStore from '../lib/productState';

const AdminProductForm = ({ product, mode }) => {
  const navigate = useNavigate();
  const { addProduct, updateProduct } = useProductStore();
  const [formData, setFormData] = useState(product || {
    name: '',
    price: '',
    category: '',
    description: '',
    images: [],
    videos: []
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCategoryChange = (value) => {
    setFormData(prev => ({ ...prev, category: value }));
  };

  const handleMediaUpload = (e, type) => {
    const files = Array.from(e.target.files);
    const mediaUrls = files.map(file => URL.createObjectURL(file));
    setFormData(prev => ({ ...prev, [type]: [...prev[type], ...mediaUrls] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (mode === 'add') {
      addProduct({ ...formData, price: parseFloat(formData.price) });
    } else {
      updateProduct({ ...formData, price: parseFloat(formData.price) });
    }
    navigate('/admin');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-lg shadow">
      <div>
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          name="name"
          value={formData.name}
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
          value={formData.price}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <Label htmlFor="category">Category</Label>
        <Select onValueChange={handleCategoryChange} value={formData.category}>
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
      <div>
        <Label htmlFor="description">Description</Label>
        <Textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <Label htmlFor="images">Images</Label>
        <Input
          id="images"
          name="images"
          type="file"
          accept="image/*"
          multiple
          onChange={(e) => handleMediaUpload(e, 'images')}
        />
        <div className="mt-2 flex flex-wrap gap-2">
          {formData.images.map((image, index) => (
            <img key={index} src={image} alt={`Product ${index + 1}`} className="w-20 h-20 object-cover" />
          ))}
        </div>
      </div>
      <div>
        <Label htmlFor="videos">Videos</Label>
        <Input
          id="videos"
          name="videos"
          type="file"
          accept="video/*"
          multiple
          onChange={(e) => handleMediaUpload(e, 'videos')}
        />
        <div className="mt-2 flex flex-wrap gap-2">
          {formData.videos.map((video, index) => (
            <video key={index} src={video} className="w-40 h-40" controls />
          ))}
        </div>
      </div>
      <Button type="submit">{mode === 'add' ? 'Add Product' : 'Update Product'}</Button>
    </form>
  );
};

export default AdminProductForm;