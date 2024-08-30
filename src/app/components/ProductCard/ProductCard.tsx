import Image from 'next/image';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

export default function ProductCard() {
  return (
    <div className='relative max-w-xs max-h-[434px] overflow-hidden group '>
      <Image
        className=' object-cover bg-gray-500 hover:opacity-20 '
        src='https://via.placeholder.com/400x434'
        alt='Imagem do Produto'
        width={400}
        objectFit='cover'
        height={434}
      />
      <div className='mt-6 px-0'>
        <div className='font-medium text-[#0E1422]'>Nome do Produto</div>
      </div>
      <div className='flex flex-row px-0 pt-4 pb-2'>
        <p className='font-medium text-xs text-[#0E1422] border w-20 p-1 rounded-full text-center mr-4'>
          In Stock
        </p>
        <span className='text-[#474B57]'>R$ 199,99</span>
      </div>

      <div className='absolute inset-0 flex justify-end items-start p-4 opacity-0 group-hover:opacity-100 transition-opacity'>
        <FavoriteBorderOutlinedIcon />
      </div>

      <div className='cursor-pointer absolute bottom-20 left-0 right-0 flex justify-center items-center p-4 rounded-ee-2xl rounded-es-2xl opacity-0 group-hover:opacity-100 transition-opacity bg-slate-500 text-white'>
        <p className='px-2'>Add to Cart</p>
        <ShoppingCartOutlinedIcon />
      </div>
    </div>
  );
}
