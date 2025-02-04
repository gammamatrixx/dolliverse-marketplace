import React from 'react';
import { useParams } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Button } from '@/components/ui/button';
import useProductStore from '../lib/productState';

const ProductPage = () => {
  const { id } = useParams();
  const { products, addToCart } = useProductStore();
  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col bg-gray-100">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold mb-8 text-center">Product Not Found</h1>
        </main>
        <Footer />
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <div className="md:flex">
            <div className="md:flex-shrink-0">
              <div className="relative w-full h-96">
                {product.images && product.images.length > 0 ? (
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <img
                    src="/placeholder.svg"
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
            </div>
            <div className="p-8">
              <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
              <p className="text-gray-600 text-xl mb-4">${product.price.toFixed(2)}</p>
              <p className="text-gray-700 mb-4">{product.description}</p>
              <p className="text-gray-600 mb-4">Category: {product.category}</p>
              <Button className="bg-pink-500 hover:bg-pink-600 text-white" onClick={handleAddToCart}>
                Add to Cart
              </Button>
            </div>
          </div>
          {product.images && product.images.length > 1 && (
            <div className="p-8">
              <h2 className="text-2xl font-bold mb-4">More Images</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {product.images.slice(1).map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`${product.name} - Image ${index + 2}`}
                    className="w-full h-48 object-cover rounded"
                  />
                ))}
              </div>
            </div>
          )}
          {product.videos && product.videos.length > 0 && (
            <div className="p-8">
              <h2 className="text-2xl font-bold mb-4">Product Videos</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {product.videos.map((video, index) => (
                  <video key={index} src={video} className="w-full" controls />
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductPage;
