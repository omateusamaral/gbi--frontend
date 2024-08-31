import client from './client';

export async function listCategories(): Promise<string[]> {
  try {
    const { data } = await client.get('/products/categories');
    return data;
  } catch (error) {
    throw error;
  }
}
