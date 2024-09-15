import { create } from 'zustand';

const useProductStore = create((set) => ({
  products: [
    { id: 1, name: 'Rosie', price: 29.99, category: 'Clothing Dolls' },
    { id: 2, name: 'Daisy', price: 34.99, category: 'Baby Dolls' },
    { id: 3, name: 'Lily', price: 39.99, category: 'Animal Dolls' },
    { id: 4, name: 'Poppy', price: 27.99, category: 'Clothing Dolls' },
  ],
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
}));

export default useProductStore;