import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Button } from '@/components/ui/button';
import useProductStore from '../lib/productState';

const CartPage = () => {
  const navigate = useNavigate();
  const { cart, removeFromCart, updateCartItemQuantity, clearCart } = useProductStore();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity > 0) {
      updateCartItemQuantity(id, newQuantity);
    }
  };

  const handleRemove = (id) => {
    removeFromCart(id);
  };

  const handleCheckout = () => {
    navigate('/payment');
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center">Your Cart</h1>
        {cart.length === 0 ? (
          <p className="text-center text-xl">Your cart is empty.</p>
        ) : (
          <>
            <div className="bg-white shadow-md rounded-lg overflow-hidden mb-8">
              {cart.map((item) => (
                <div key={item.id} className="flex items-center justify-between p-4 border-b">
                  <div className="flex items-center">
                    <img src={item.images[0] || '/placeholder.svg'} alt={item.name} className="w-16 h-16 object-cover mr-4" />
                    <div>
                      <h2 className="text-lg font-semibold">{item.name}</h2>
                      <p className="text-gray-600">${item.price.toFixed(2)}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                    >
                      -
                    </Button>
                    <span className="mx-2">{item.quantity}</span>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                    >
                      +
                    </Button>
                    <Button
                      variant="destructive"
                      size="sm"
                      className="ml-4"
                      onClick={() => handleRemove(item.id)}
                    >
                      Remove
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-right mb-4">
              <p className="text-xl font-semibold">Total: ${total.toFixed(2)}</p>
            </div>
            <div className="flex justify-end">
              <Button variant="outline" className="mr-4" onClick={clearCart}>
                Clear Cart
              </Button>
              <Button className="bg-pink-500 hover:bg-pink-600 text-white" onClick={handleCheckout}>
                Proceed to Checkout
              </Button>
            </div>
          </>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default CartPage;
