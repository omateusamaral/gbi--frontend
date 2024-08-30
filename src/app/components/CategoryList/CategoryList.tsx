import { CategoryListProps } from './CategoryList.interface';

export default function CategoryList({ categories }: CategoryListProps) {
  return (
    <div className='max-h-80 max-w-60 w-full h-full  flex flex-col mb-5 overflow-y-auto border rounded-md py-3 px-6'>
      <p className='text-[#0E1422] font-medium py-4'>Categories</p>
      {categories.map((value) => (
        <div
          className='flex items-center border-b border-gray-300 pb-2 py-4'
          key={value.value}
        >
          <input
            id={`checkbox-${value.value}`}
            type='checkbox'
            className='form-checkbox text-gray-700 py-3'
          />
          <label
            htmlFor={`checkbox-${value.value}`}
            className='ml-2 text-gray-700'
          >
            {value.label}
          </label>
        </div>
      ))}
    </div>
  );
}
