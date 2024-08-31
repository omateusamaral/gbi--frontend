export interface CategoryListProps {
  categories: Category[];
  isLoading: boolean;
}

export interface Category {
  label: string;
  value: string;
}
