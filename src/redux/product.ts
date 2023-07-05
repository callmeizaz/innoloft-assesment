import { create } from 'zustand';
import { fetchProductData } from '../services/api';

// type ProductData = {
//   //TODO: Define the type of your product data here
// };

type Store = {
  productData: any | null;
  fetchProduct: () => Promise<void>;
  loading: boolean;
};

export const useProductStore = create<Store>((set) => ({
  productData: null,
  loading: true,
  fetchProduct: async () => {
    try {
      const data = await fetchProductData();
      set({ productData: data, loading: false });
    } catch (error) {
      // Handle the error
    }
  },
}));
