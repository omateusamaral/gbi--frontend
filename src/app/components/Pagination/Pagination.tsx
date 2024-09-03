import { ProductContext } from '@gbi/app/contexts/product/product.context';
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import { useContext } from 'react';

export default function Pagination({ isLoading, quantity }: any) {
  const context = useContext(ProductContext);
  const pages = Array.from({ length: quantity }, (_, index) => index + 1);

  function handleToPage(page: number) {
    if (context?.setCurrentPage) {
      context.setCurrentPage(page);
    }
  }

  function handleBeforeCurrentPage() {
    if (!context || context.pagination.currentPage === 1) {
      return;
    }

    context.setCurrentPage(context.pagination.currentPage - 1);
  }

  function handleNextCurrentPage() {
    if (!context || context?.pagination.currentPage === pages.at(-1)) {
      return;
    }

    context.setCurrentPage(context.pagination.currentPage + 1);
  }
  return (
    <div className='flex justify-center my-6'>
      <nav className='inline-flex -space-x-px'>
        <button
          type='button'
          disabled={context?.pagination.currentPage === 1}
          onClick={handleBeforeCurrentPage}
          className='relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 focus:z-10 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
        >
          <ArrowBackIosOutlinedIcon fontSize='small' />
        </button>

        {pages.map((page) => (
          <button
            type='button'
            onClick={() => handleToPage(page)}
            disabled={page === context?.pagination.currentPage}
            key={page}
            className={`${
              page === context?.pagination.currentPage
                ? 'bg-gray-200'
                : 'bg-white'
            } relative inline-flex items-center px-4 py-2 text-sm font-medium border border-gray-300 hover:bg-gray-100 focus:z-10 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2`}
          >
            {page}
          </button>
        ))}

        <button
          type='button'
          onClick={handleNextCurrentPage}
          disabled={context?.pagination.currentPage === pages.at(-1)}
          className='relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 focus:z-10 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
        >
          <ArrowForwardIosOutlinedIcon fontSize='small' />
        </button>
      </nav>
    </div>
  );
}
