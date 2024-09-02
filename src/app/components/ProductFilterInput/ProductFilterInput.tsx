import { ProductContext } from '@gbi/app/contexts/product.context';
import SearchIcon from '@mui/icons-material/Search';
import { ChangeEvent, useContext } from 'react';

export default function ProductFilterInput() {
  const context = useContext(ProductContext);

  function handleSearch(event: ChangeEvent<HTMLInputElement>) {
    context?.setSearchProduct(event.target.value);
  }
  return (
    <div className='flex items-center border border-gray-300 rounded-lg px-2 py-0 m-0 w-full max-w-xs h-11'>
      <SearchIcon color='disabled' />
      <input
        type='text'
        placeholder='Procure um produto'
        className='ml-2 w-full m-0 p-0 outline-none'
        onChange={handleSearch}
      />
    </div>
  );
}
