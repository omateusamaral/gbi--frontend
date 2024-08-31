import Image from 'next/image';
import ProductFilterInput from '../ProductFilterInput/ProductFilterInput';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

export default function Header() {
  return (
    <div className='lg:flex hidden flex-row  w-full h-20 px-12 '>
      <div className='flex flex-row items-center'>
        <Image alt='logo' src='/logo.png' width={40} height={35} />
        <p className='font-extrabold text-xl ml-3'>Ecommerce</p>
      </div>
      <div className='flex flex-row items-center mx-96'>
        <p className='text-[#5C5F6A] font-medium text-sm mr-8'>Home</p>
        <p className='text-[#5C5F6A] font-medium text-sm mr-8'>Categorias</p>
        <p className='text-[#5C5F6A] font-medium text-sm mr-8'>Sobre</p>
        <p className='text-[#5C5F6A] font-medium text-sm mr-8'>Contato</p>
      </div>

      <div className='flex flex-row items-center'>
        <ProductFilterInput />
        <ShoppingCartOutlinedIcon htmlColor='#5C5F6A' className='mx-4' />
        <AccountCircleOutlinedIcon htmlColor='#5C5F6A' />
      </div>
    </div>
  );
}
