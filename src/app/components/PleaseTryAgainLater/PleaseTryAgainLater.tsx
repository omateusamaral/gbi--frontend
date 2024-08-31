import React from 'react';
import { PleaseTryAgainLaterProps } from './pleaseTryAgainLater.interface';
export default function PleaseTryAgainLater({
  error,
  refetch,
  customTitle,
}: PleaseTryAgainLaterProps) {
  if (Boolean(error) == false) {
    return <></>;
  }
  return (
    <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
      <div className='bg-white p-8 rounded-lg shadow-md text-center'>
        <h1 className='text-3xl font-bold text-red-600 mb-4'>
          {customTitle ? customTitle : 'Unexpected Error Occurred'}
        </h1>
        <p className='text-gray-700 mb-6'>
          We encountered an unexpected issue. Please try again later.
        </p>
        <p>{error.message}</p>

        <button
          onClick={refetch}
          className='px-4 py-2  text-black font-semibold rounded'
        >
          Refetch and close
        </button>
        <button className='px-4 py-2  text-red-500 font-semibold rounded'>
          close
        </button>
      </div>
    </div>
  );
}
