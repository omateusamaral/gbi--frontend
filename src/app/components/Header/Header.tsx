import Image from 'next/image';
import ProductFilterInput from '../ProductFilterInput/ProductFilterInput';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import Link from 'next/link';
import { Badge } from '@mui/material';
import { useContext } from 'react';
import { CartContext } from '@gbi/app/contexts/cart/cart.context';

export default function Header() {
  const context = useContext(CartContext);
  return (
    <div className='flex  flex-col xl:flex-row  h-40 items-center justify-center xl:h-20  '>
      <div className='flex flex-row items-center'>
        <Link href='/' className='flex flex-row'>
          <Image alt='logo' src='/logo.png' width={40} height={35} />
          <p className='font-extrabold text-xl ml-3'>Ecommerce</p>
        </Link>
      </div>
      <div className='flex flex-row items-center mx-0 lg:mx-96'>
        <p className='text-[#5C5F6A] font-medium text-sm mr-8'>Home</p>
        <p className='text-[#5C5F6A] font-medium text-sm mr-8'>Categorias</p>
        <p className='text-[#5C5F6A] font-medium text-sm mr-8'>Sobre</p>
        <p className='text-[#5C5F6A] font-medium text-sm mr-8'>Contato</p>
      </div>

      <div className='flex flex-row items-center'>
        <ProductFilterInput />
        <Link href='/cart' className='mx-4'>
          <Badge badgeContent={context?.products.length} color='primary'>
            <ShoppingCartOutlinedIcon htmlColor='#5C5F6A' />
          </Badge>
        </Link>
        <AccountCircleOutlinedIcon htmlColor='#5C5F6A' />
      </div>
    </div>
  );
}
