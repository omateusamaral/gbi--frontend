import Image from 'next/image';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { ProductCardProps } from './productCard.interface';
import { useContext } from 'react';
import { CartContext } from '@gbi/app/contexts/cart/cart.context';

export default function ProductCard({
  title,
  image,
  price,
  category,
  description,
  id,
}: ProductCardProps) {
  const context = useContext(CartContext);

  function handleAddToCart() {
    if (!context) {
      return;
    }

    const productToUpdateIndex = context.products.findIndex(
      (product) => product.id === id
    );
    if (productToUpdateIndex !== -1) {
      context.products[productToUpdateIndex].quantity =
        context.products[productToUpdateIndex].quantity + 1;
      return context.setProducts(context.products);
    }

    return context.setProducts([
      ...context.products,
      {
        category,
        description,
        id,
        image,
        price,
        quantity: 1,
        title,
      },
    ]);
  }
  return (
    <div className='relative max-w-xs max-h-[434px] overflow-hidden group '>
      <Image
        className=' object-scale-down bg-white hover:opacity-20 '
        src={image}
        alt='Imagem do Produto'
        width={300}
        height={300}
        style={{
          maxWidth: 300,
          height: 150,
        }}
      />
      <div className='mt-6 px-0'>
        <div className='font-medium text-[#0E1422]'>{title}</div>
      </div>
      <div className='flex flex-row px-0 pt-4 pb-2'>
        <p className='font-medium text-xs text-[#0E1422] border w-20 p-1 rounded-full text-center mr-4'>
          In Stock
        </p>
        <span className='text-[#474B57]'>R$ {price}</span>
      </div>

      <div className='absolute inset-0 flex justify-end items-start p-4 opacity-0 group-hover:opacity-100 transition-opacity'>
        <FavoriteBorderOutlinedIcon />
      </div>

      <button
        type='button'
        onClick={handleAddToCart}
        className='cursor-pointer absolute bottom-20 left-0 right-0 flex justify-center items-center p-4 rounded-ee-2xl rounded-es-2xl opacity-0 group-hover:opacity-100 transition-opacity bg-slate-500 text-white'
      >
        <p className='px-2'>Add to Cart</p>
        <ShoppingCartOutlinedIcon />
      </button>
    </div>
  );
}
