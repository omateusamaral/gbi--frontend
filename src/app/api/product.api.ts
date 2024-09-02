import { ProductCardProps } from '../components/ProductCard/productCard.interface';
import { ITEMS_PER_PAGE } from '../contexts/product.context';
import client from './client';

export async function countAllProducts(): Promise<number> {
  try {
    const { data } = await client.get<any[]>('/products');
    return Math.ceil(data.length / ITEMS_PER_PAGE);
  } catch (error) {
    throw error;
  }
}

export async function listProducts(): Promise<ProductCardProps[]> {
  try {
    const { data } = await client.get<ProductCardProps[]>(
      `/products?limit${ITEMS_PER_PAGE}`
    );
    return data;
  } catch (error) {
    throw error;
  }
}
