import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
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
    videos: [],
    placeholderImage: ''
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
    setFormData(prev => ({ 
      ...prev, 
      [type]: [...prev[type], ...mediaUrls],
      placeholderImage: prev.placeholderImage || (type === 'images' ? mediaUrls[0] : prev.placeholderImage)
    }));
  };

  const handlePlaceholderChange = (value) => {
    setFormData(prev => ({ ...prev, placeholderImage: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const productData = {
      ...formData,
      price: parseFloat(formData.price),
      images: formData.images,
      videos: formData.videos,
      placeholderImage: formData.placeholderImage
    };
    if (mode === 'add') {
      addProduct(productData);
    } else {
      updateProduct(productData);
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
      {formData.images.length > 0 && (
        <div>
          <Label>Select Placeholder Image</Label>
          <RadioGroup value={formData.placeholderImage} onValueChange={handlePlaceholderChange}>
            {formData.images.map((image, index) => (
              <div key={index} className="flex items-center space-x-2">
                <RadioGroupItem value={image} id={`placeholder-${index}`} />
                <Label htmlFor={`placeholder-${index}`}>Image {index + 1}</Label>
                <img src={image} alt={`Placeholder ${index + 1}`} className="w-10 h-10 object-cover" />
              </div>
            ))}
          </RadioGroup>
        </div>
      )}
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
