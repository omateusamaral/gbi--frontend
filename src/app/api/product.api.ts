import { ProductCardProps } from '../components/ProductCard/productCard.interface';
import client from './client';

const PRODUCTS_LIMIT = 9;
export async function countAllProducts(): Promise<number> {
  try {
    const { data } = await client.get<any[]>('/products');
    return Math.ceil(data.length / PRODUCTS_LIMIT);
  } catch (error) {
    throw error;
  }
}

export async function listProducts(): Promise<ProductCardProps[]> {
  try {
    const { data } = await client.get<ProductCardProps[]>(
      `/products?limit${PRODUCTS_LIMIT}`
    );
    return data;
  } catch (error) {
    throw error;
  }
}
