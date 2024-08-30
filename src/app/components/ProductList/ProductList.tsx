import Pagination from '../Pagination/Pagination';
import ProductCard from '../ProductCard/ProductCard';

export default function ProductList() {
  return (
    <>
      <div className='grid md:grid-cols-3 sm:grid-cols-2 gap-36 max-h-[calc(3*min(200px, 100vh))] w-full overflow-auto'>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((x) => (
          <ProductCard key={x} />
        ))}
      </div>
      <Pagination />
    </>
  );
}
