import { create } from 'zustand';

const useProductStore = create((set) => ({
  products: [
    { id: 1, name: 'Rosie', price: 29.99, category: 'Clothing Dolls', image: '/placeholder.svg' },
    { id: 2, name: 'Daisy', price: 34.99, category: 'Baby Dolls', image: '/placeholder.svg' },
    { id: 3, name: 'Lily', price: 39.99, category: 'Animal Dolls', image: '/placeholder.svg' },
    { id: 4, name: 'Poppy', price: 27.99, category: 'Clothing Dolls', image: '/placeholder.svg' },
  ],
  cart: [],
  updateProduct: (updatedProduct) =>
    set((state) => ({
      products: state.products.map((product) =>
        product.id === updatedProduct.id ? updatedProduct : product
      ),
    })),
  deleteProduct: (productId) =>
    set((state) => ({
      products: state.products.filter((product) => product.id !== productId),
    })),
  addToCart: (product) =>
    set((state) => ({
      cart: [...state.cart, { ...product, quantity: 1 }],
    })),
  removeFromCart: (productId) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== productId),
    })),
  updateCartItemQuantity: (productId, quantity) =>
    set((state) => ({
      cart: state.cart.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      ),
    })),
  clearCart: () => set({ cart: [] }),
}));

export default useProductStore;
