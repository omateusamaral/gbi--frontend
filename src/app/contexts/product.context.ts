import { createContext } from 'react';
export const ITEMS_PER_PAGE = 9;

interface Pagination {
  currentPage: number;
  totalPages: number;
}

interface ProductContextType {
  pagination: Pagination;
  setCurrentPage: (page: number) => void;
  setSearchProduct: (productTitle: string) => void;
  searchProduct: string;
}

export const ProductContext = createContext<ProductContextType | undefined>(
  undefined
);
