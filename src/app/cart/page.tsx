'use client';
import Link from 'next/link';
import BreadCrumb from '../components/BreadCrumb/BreadCrumb';
import Header from '../components/Header/Header';
import ProductCardList from '../components/ProductCartList/ProductCartList';
import { useContext, useMemo } from 'react';
import { CartContext } from '../contexts/cart/cart.context';

export default function Cart() {
  const context = useContext(CartContext);

  const subTotal = useMemo(() => {
    if (!context) {
      return 0;
    }
    return context.products.reduce((prevValue, currentValue) => {
      return (
        Number(prevValue) + Number(currentValue.price) * currentValue.quantity
      );
    }, 0);
  }, [context]);
  return (
    <>
      <Header />
      <BreadCrumb
        breadCrumbs={[
          {
            label: 'Carrinho',
            path: '/cart',
          },
        ]}
        title='Carrinho'
      />
      <section className='container flex flex-col  lg:flex-row justify-between mt-6 px-4'>
        {context?.products.length === 0 ? (
          <p>Add to cart to see here</p>
        ) : (
          <>
            <ProductCardList />

            <div className='bg-white p-6 rounded-lg border max-w-sm w-full'>
              <h2 className='text-xl font-semibold mb-4'>Order Summary</h2>
              <div className='flex justify-between mb-2'>
                <span>Subtotal</span>
                <span>R$ {Math.round(subTotal)} </span>
              </div>
              <div className='flex justify-between mb-2'>
                <span>Frete</span>
                <span>Gratis</span>
              </div>
              <div className='flex justify-between mb-4'>
                <span>Tax:</span>
                <span>R$ 3.00</span>
              </div>
              <hr className='mb-4' />
              <div className='flex justify-between font-semibold mb-6'>
                <span>Total</span>
                <span>R$ {Math.round(subTotal) + 3}</span>
              </div>
              <button className='bg-black text-white w-full py-2 rounded-lg hover:bg-gray-800'>
                Checkout
              </button>
              <Link
                href='/'
                className='block text-center text-sm text-gray-500 mt-4'
              >
                Continue na loja
              </Link>
            </div>
          </>
        )}
      </section>
    </>
  );
}
