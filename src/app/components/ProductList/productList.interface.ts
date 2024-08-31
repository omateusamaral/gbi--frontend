import { ProductCardProps } from '../ProductCard/productCard.interface';

export interface ProductListProps {
  products: ProductCardProps[];
  isLoading: boolean;
}
