import Image from 'next/image';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import RemoveRoundedIcon from '@mui/icons-material/RemoveRounded';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import { useContext } from 'react';
import { CartContext } from '@gbi/app/contexts/cart.context';
export default function ProductCardList() {
  const context = useContext(CartContext);
  console.log(`asa`, context?.products);
  return (
    <div>
      <h3 className='py-3 border-b-[1px]'>Seu Carrinho</h3>
      <div className='max-h-60 overflow-y-auto'>
        {context?.products.map((product) => (
          <div
            className='py-8 flex flex-row items-center justify-between '
            key={product.id}
          >
            <Image
              className=' object-scale-down bg-white  '
              src={product.image}
              alt='Imagem do Produto'
              width={44}
              height={62}
              style={{
                maxWidth: 44,
                height: 62,
              }}
            />

            <p className='font-medium text-[#0E1422] pl-4 mr-40'>
              {product.title}
            </p>

            <div className='font-medium text-[#0E1422] mx-4'>R$75.00</div>

            <div className='flex flex-row items-center bg-white border border-gray-300 rounded-lg py-1 px-2 mr-6'>
              <button type='button'>
                <RemoveRoundedIcon fontSize='small' color='disabled' />
              </button>

              <p className='mx-4'>{product.quantity}</p>

              <button type='button'>
                <AddRoundedIcon fontSize='small' color='disabled' />
              </button>
            </div>
            <CloseRoundedIcon color='disabled' />
          </div>
        ))}
      </div>
    </div>
  );
}
