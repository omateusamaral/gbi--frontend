'use client';
import Link from 'next/link';
import BreadCrumb from '../components/BreadCrumb/BreadCrumb';
import Header from '../components/Header/Header';
import ProductCardList from '../components/ProductCartList/ProductCartList';

export default function Cart() {
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
      <section className='container flex flex-row justify-between mt-6'>
        <ProductCardList />

        <div className='bg-white p-6 rounded-lg border max-w-sm w-full'>
          <h2 className='text-xl font-semibold mb-4'>Order Summary</h2>
          <div className='flex justify-between mb-2'>
            <span>Subtotal</span>
            <span>R$ 90.00</span>
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
            <span>R$ 100.00</span>
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
      </section>
    </>
  );
}
