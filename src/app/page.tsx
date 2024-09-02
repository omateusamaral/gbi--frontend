'use client';
import CategoryList from './components/CategoryList/CategoryList';
import ProductList from './components/ProductList/ProductList';
import { useQuery } from 'react-query';
import { listCategories } from './api/category.api';
import PleaseTryAgainLater from './components/PleaseTryAgainLater/PleaseTryAgainLater';
import { countAllProducts, listProducts } from './api/product.api';
import Pagination from './components/Pagination/Pagination';
import { ITEMS_PER_PAGE, ProductContext } from './contexts/product.context';
import { useState } from 'react';
import { useDebounceValue } from 'usehooks-ts';
import Header from './components/Header/Header';
import BreadCrumb from './components/BreadCrumb/BreadCrumb';
export default function Home() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [debouncedValue, setSearchProduct] = useDebounceValue('', 500);
  const [categories, setCategories] = useState<string[]>([]);

  console.log(currentPage);
  const categoriesQuery = useQuery(['categories'], listCategories, {
    staleTime: 1000 * 60 * 60 * 24,
    refetchOnMount: false,
  });

  const productsQuery = useQuery(['products'], listProducts, {
    staleTime: 1000 * 60 * 60 * 24,
    refetchOnMount: false,
  });

  const countProductsQuery = useQuery(['countProducts'], countAllProducts, {
    staleTime: 1000 * 60 * 60 * 24,
    refetchOnMount: false,
  });

  return (
    <ProductContext.Provider
      value={{
        pagination: {
          totalPages: Math.ceil(
            (countProductsQuery.data ?? 1) / ITEMS_PER_PAGE
          ),
          currentPage: currentPage,
        },
        searchProduct: debouncedValue,
        setCurrentPage,
        setSearchProduct,
        categories,
        setCategories,
      }}
    >
      <Header />
      <BreadCrumb
        breadCrumbs={[
          {
            label: 'Home',
            path: '/',
          },
        ]}
      />
      <section className='container mx-auto items-baseline lg:items-start flex flex-col lg:flex-row mt-6'>
        <CategoryList
          categories={
            categoriesQuery.data?.map((category) => ({
              label: category,
              value: category,
            })) || []
          }
          isLoading={categoriesQuery.isLoading}
        />
        <div className='ml-7'>
          <ProductList
            isLoading={productsQuery.isLoading}
            products={productsQuery.data ?? []}
          />
          <Pagination
            isLoading={productsQuery.isLoading}
            quantity={countProductsQuery.data ?? 1}
          />
        </div>
        <PleaseTryAgainLater
          error={categoriesQuery.error}
          refetch={categoriesQuery.refetch}
          customTitle='Error loading categories'
        />

        <PleaseTryAgainLater
          error={productsQuery.error}
          refetch={productsQuery.refetch}
          customTitle='Error loading products'
        />

        <PleaseTryAgainLater
          error={countProductsQuery.error}
          refetch={countProductsQuery.refetch}
          customTitle='Error loading pagination'
        />
      </section>
    </ProductContext.Provider>
  );
}
