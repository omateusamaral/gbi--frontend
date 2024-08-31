import { CircularProgress } from '@mui/material';
import Pagination from '../Pagination/Pagination';
import ProductCard from '../ProductCard/ProductCard';
import { ProductListProps } from './productList.interface';

export default function ProductList({ isLoading, products }: ProductListProps) {
  return (
    <div
      className={`${
        isLoading || !products.length
          ? 'flex justify-center h-screen w-[60vw]  items-center'
          : 'grid md:grid-cols-3 sm:grid-cols-2 gap-36 max-h-[calc(3*min(200px, 100vh))] w-full overflow-auto'
      }`}
    >
      <RenderContent isLoading={isLoading} products={products} />
    </div>
  );
}

function RenderContent({ isLoading, products }: ProductListProps) {
  if (isLoading) {
    return <CircularProgress />;
  }

  if (!products.length) {
    return <p>There is no product available.</p>;
  }

  return (
    <>
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </>
  );
}
