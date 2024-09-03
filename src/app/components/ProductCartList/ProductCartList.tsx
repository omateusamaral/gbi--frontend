import Image from 'next/image';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import RemoveRoundedIcon from '@mui/icons-material/RemoveRounded';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import { useContext, useMemo } from 'react';
import { CartContext } from '@gbi/app/contexts/cart/cart.context';
export default function ProductCardList() {
  const context = useContext(CartContext);

  function handleChangeQuantity(
    productId: string,
    event: 'increase' | 'decrease' | 'delete'
  ) {
    if (!context) {
      return;
    }

    const productToUpdateIndex = context.products.findIndex(
      (product) => product.id === productId
    );

    if (productToUpdateIndex === -1) {
      return;
    }

    switch (event) {
      case 'increase':
        context.products[productToUpdateIndex].quantity =
          context.products[productToUpdateIndex].quantity + 1;
        break;

      case 'decrease':
        context.products[productToUpdateIndex].quantity =
          context.products[productToUpdateIndex].quantity - 1;

        break;

      default:
        context.products = context.products.filter(
          (product) => product.id !== productId
        );
        break;
    }

    return context.setProducts([...context.products]);
  }

  return (
    <div className='py-2'>
      <h3 className='py-3 border-b-[1px]'>Seu Carrinho</h3>
      <div className='max-h-60 overflow-y-auto'>
        {context?.products.map((product) => (
          <div
            className='py-8 flex flex-row items-center justify-between px-4'
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

            <p className='font-medium text-[#0E1422] pl-4 mr-40 w-96'>
              {product.title}
            </p>

            <div className='font-medium text-[#0E1422] mx-4'>
              R$ {product.price}
            </div>

            <div className='flex flex-row items-center bg-white border border-gray-300 rounded-lg py-1 px-2 mr-6'>
              <button
                type='button'
                onClick={() => handleChangeQuantity(product.id, 'decrease')}
              >
                <RemoveRoundedIcon fontSize='small' color='disabled' />
              </button>

              <p className='mx-4'>{product.quantity}</p>

              <button
                type='button'
                onClick={() => handleChangeQuantity(product.id, 'increase')}
              >
                <AddRoundedIcon fontSize='small' color='disabled' />
              </button>
            </div>
            <button
              type='button'
              onClick={() => handleChangeQuantity(product.id, 'delete')}
            >
              <CloseRoundedIcon color='disabled' />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
