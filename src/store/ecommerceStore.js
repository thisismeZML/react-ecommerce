import { BaseUrl } from "@/config/config";
import axios from "axios";
import { create } from "zustand";
import { persist } from "zustand/middleware";

const initialState = {
  isMenuOpen: false,
  cartProducts: [],
  wishListProducts: [],
  categories: [],
  products: [],
  isLoading: false,
};

export const useEcommerceStore = create(
  persist(
    (set) => ({
      ...initialState,
      toggleMenu: () => set((state) => ({ isMenuOpen: !state.isMenuOpen })),
      addToCart: (newProduct) =>
        set((state) => ({ cartProducts: [...state.cartProducts, newProduct] })),
      removeFromCart: (id) =>
        set((state) => ({
          cartProducts: state.cartProducts.filter((product) => product.id !== id),
        })),
      addToWishList: (newProduct) =>
        set((state) => ({
          wishListProducts: [...state.wishListProducts, newProduct],
        })),
      removeFromWishList: (id) =>
        set((state) => ({
          wishListProducts: state.wishListProducts.filter(
            (product) => product.id !== id
          ),
        })),
      updateQuantity: (id, amount) =>
        set((state) => ({
          cartProducts: state.cartProducts.map((product) => {
            if (product.id === id) {
              const quantity = product.quantity + amount;
              const cost = Math.round(product.price * quantity * 100) / 100;
              if (quantity > 0) {
                return { ...product, quantity, cost };
              }
            }
            return product;
          }),
        })),
      fetchCategories: async () => {
        set({ isLoading: true });
        const res = await axios.get(`${BaseUrl}/category`);
        const categoriesData = res.data.categories;
        set({ categories: categoriesData });
        set({ isLoading: false });
      },
      fetchProducts: async () => {
        set({ isLoading: true });
        const res = await axios.get(`https://fakestoreapi.in/api/products?limit=150`);
        const productsData = res.data.products;
        set({ products: productsData });
        set({ isLoading: false });
      },
    }),
    {
      name: "ecommerce-store", // unique name for storage
      getStorage: () => localStorage, // use localStorage
    }
  )
);