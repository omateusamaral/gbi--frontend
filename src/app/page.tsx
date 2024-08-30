import Image from 'next/image';
import NotificationBar from './components/NotificationBar/NotificationBar';
import Header from './components/Header/Header';
import CategoryList from './components/CategoryList/CategoryList';
import ProductCard from './components/ProductCard/ProductCard';
import ProductList from './components/ProductList/ProductList';
import Pagination from './components/Pagination/Pagination';

export default function Home() {
  return (
    <section className='container mx-auto items-baseline lg:items-start flex flex-col lg:flex-row mt-6'>
      <CategoryList
        categories={[
          {
            label: 'Perfume',
            value: 'perfume',
          },
        ]}
      />
      <div className='ml-7'>
        <ProductList />
      </div>
    </section>
  );
}
