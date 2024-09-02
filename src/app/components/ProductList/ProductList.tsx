import { CircularProgress } from '@mui/material';
import Pagination from '../Pagination/Pagination';
import ProductCard from '../ProductCard/ProductCard';
import { ProductListProps } from './productList.interface';
import {
  ITEMS_PER_PAGE,
  ProductContext,
} from '@gbi/app/contexts/product.context';
import { useContext, useMemo } from 'react';

export default function ProductList({ isLoading, products }: ProductListProps) {
  const context = useContext(ProductContext);

  const productsMemoized = useMemo(() => {
    if (!products) {
      return [];
    }

    let filteredProducts = products;

    if (context?.categories.length) {
      filteredProducts = filteredProducts.filter((product) =>
        context.categories.includes(product.category)
      );
    }
    if (context?.searchProduct) {
      filteredProducts = filteredProducts.filter((product) =>
        product.title
          .toLowerCase()
          .includes(context.searchProduct.toLowerCase())
      );
    }

    if (context?.pagination.currentPage) {
      const startIndex = (context.pagination.currentPage - 1) * ITEMS_PER_PAGE;
      const endIndex = startIndex + ITEMS_PER_PAGE;

      filteredProducts = filteredProducts.slice(startIndex, endIndex);
    }

    return filteredProducts;
  }, [context, products]);
  return (
    <div
      className={`${
        isLoading || !productsMemoized.length
          ? 'flex justify-center h-screen w-[60vw]  items-center'
          : 'grid md:grid-cols-3 sm:grid-cols-2 gap-36 max-h-[calc(3*min(200px, 100vh))] w-full overflow-auto'
      }`}
    >
      <RenderContent isLoading={isLoading} products={productsMemoized} />
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
