import { createContext } from 'react';
import { ProductCardProps } from '../components/ProductCard/productCard.interface';
export const ITEMS_PER_PAGE = 9;

export interface ProductsCart extends ProductCardProps {
  quantity: number;
}

interface CartContextType {
  products: ProductsCart[];
  setProducts: (product: ProductsCart[]) => void;
}

export const CartContext = createContext<CartContextType | undefined>(
  undefined
);
