import { ReactNode, useState } from 'react';
import { useDebounceValue } from 'usehooks-ts';
import { ProductContext, ITEMS_PER_PAGE } from './product.context';

interface CardContextProviderProps {
  children: ReactNode;
  countProducts: number | undefined;
}

export default function ProductContextProvider({
  children,
  countProducts,
}: CardContextProviderProps) {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [debouncedValue, setSearchProduct] = useDebounceValue('', 500);
  const [categories, setCategories] = useState<string[]>([]);

  return (
    <ProductContext.Provider
      value={{
        pagination: {
          totalPages: Math.ceil((countProducts ?? 1) / ITEMS_PER_PAGE),
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
