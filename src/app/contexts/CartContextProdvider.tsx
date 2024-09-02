import { createContext, ReactNode, useState } from 'react';
import { CartContext, ProductsCart } from './cart.context';

interface CardContextProviderProps {
  children: ReactNode;
}

export function CartContextProvider({ children }: CardContextProviderProps) {
  const [products, setProducts] = useState<ProductsCart[]>([]);
  console.log(products);

  return (
    <CartContext.Provider
      value={{
        products,
        setProducts,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
