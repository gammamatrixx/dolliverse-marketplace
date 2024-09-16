import { create } from 'zustand';

const useProductStore = create((set, get) => ({
  products: [
    { 
      id: 1, 
      name: 'Rosie', 
      price: 29.99, 
      category: 'Clothing Dolls', 
      images: ['/placeholder.svg'],
      videos: [],
      description: 'A beautiful doll with a floral dress and rosy cheeks.'
    },
    { 
      id: 2, 
      name: 'Daisy', 
      price: 34.99, 
      category: 'Baby Dolls', 
      images: ['/placeholder.svg'],
      videos: [],
      description: 'A cute baby doll with soft skin and bright blue eyes.'
    },
    { 
      id: 3, 
      name: 'Lily', 
      price: 39.99, 
      category: 'Animal Dolls', 
      images: ['/placeholder.svg'],
      videos: [],
      description: 'An adorable plush cat doll with silky fur and a pink bow.'
    },
    { 
      id: 4, 
      name: 'Poppy', 
      price: 27.99, 
      category: 'Clothing Dolls', 
      images: ['/placeholder.svg'],
      videos: [],
      description: 'A charming doll with a red polka dot dress and blonde hair.'
    },
  ],
  cart: [],
  user: null,
  userDatabase: {},
  updateProduct: (updatedProduct) =>
    set((state) => ({
      products: state.products.map((product) =>
        product.id === updatedProduct.id ? { ...product, ...updatedProduct } : product
      ),
    })),
  deleteProduct: (productId) =>
    set((state) => ({
      products: state.products.filter((product) => product.id !== productId),
    })),
  addProduct: (newProduct) =>
    set((state) => ({
      products: [...state.products, { ...newProduct, id: state.products.length + 1 }],
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
  login: (username, password) => {
    const { userDatabase } = get();
    if (userDatabase[username] && userDatabase[username].password === password) {
      set({ user: { username } });
      return { success: true };
    }
    return { success: false, error: 'Invalid username or password' };
  },
  register: (username, password) => {
    const { userDatabase } = get();
    if (userDatabase[username]) {
      return { success: false, error: 'Username already exists' };
    }
    set((state) => ({
      userDatabase: {
        ...state.userDatabase,
        [username]: { password }
      }
    }));
    set({ user: { username } });
    return { success: true };
  },
  logout: () => set({ user: null }),
}));

export default useProductStore;
