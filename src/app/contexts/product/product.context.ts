import { createContext } from 'react';
export const ITEMS_PER_PAGE = 9;

interface Pagination {
  currentPage: number;
  totalPages: number;
}

interface ProductContextType {
  pagination: Pagination;
  setCurrentPage: (page: number) => void;
  searchProduct: string;
  setSearchProduct: (productTitle: string) => void;
  categories: string[];
  setCategories: (categories: string[]) => void;
}

export const ProductContext = createContext<ProductContextType | undefined>(
  undefined
);
