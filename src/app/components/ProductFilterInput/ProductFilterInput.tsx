import SearchIcon from '@mui/icons-material/Search';

export default function ProductFilterInput() {
  return (
    <div className='flex items-center border border-gray-300 rounded-lg px-2 py-0 m-0 w-full max-w-xs h-11'>
      <SearchIcon color='disabled' />
      <input
        type='text'
        placeholder='Procure um produto'
        className='ml-2 w-full m-0 p-0 outline-none'
      />
    </div>
  );
}
