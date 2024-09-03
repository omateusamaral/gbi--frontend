import { ReactNode, useState } from 'react';
import { useDebounceValue } from 'usehooks-ts';
import { ProductContext, ITEMS_PER_PAGE } from './product.context';

interface CardContextProviderProps {
  children: ReactNode;
}

export default function ProductContextProvider({
  children,
}: CardContextProviderProps) {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [debouncedValue, setSearchProduct] = useDebounceValue('', 500);
  const [categories, setCategories] = useState<string[]>([]);

  return (
    <ProductContext.Provider
      value={{
        pagination: {
          currentPage: currentPage,
        },
        searchProduct: debouncedValue,
        setCurrentPage,
        setSearchProduct,
        categories,
        setCategories,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}
