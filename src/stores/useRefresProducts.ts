import { create } from 'zustand'
import { getAllProducts } from '@/utils'
import { Product } from '@/types/product'

type ProductStore = {
  products: Product[]
  setProducts: (products: Product[]) => void
  refreshProducts: () => void
}

export const useProductStore = create<ProductStore>((set) => ({
  products: [],
  setProducts: (products) => set({ products }),
  refreshProducts: async () => {
    const products = await getAllProducts()
    set({ products })
  }
}))