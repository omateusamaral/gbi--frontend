import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';

export default function Pagination({ isLoading, quantity }: any) {
  const pages = Array.from({ length: quantity }, (_, index) => index + 1);
  return (
    <div className='flex justify-center my-6'>
      <nav className='inline-flex -space-x-px'>
        <a
          href='#'
          className='relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 focus:z-10 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
        >
          <ArrowBackIosOutlinedIcon fontSize='small' />
        </a>

        {pages.map((page) => (
          <a
            href='#'
            key={page}
            className='relative inline-flex items-center px-4 py-2 text-sm font-medium bg-white border border-gray-300 hover:bg-gray-100 focus:z-10 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
          >
            {page}
          </a>
        ))}

        <a
          href='#'
          className='relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 focus:z-10 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
        >
          <ArrowForwardIosOutlinedIcon fontSize='small' />
        </a>
      </nav>
    </div>
  );
}
