import { LinearProgress } from '@mui/material';
import { Category, CategoryListProps } from './categoryList.interface';
import { ChangeEvent, useContext } from 'react';
import { ProductContext } from '@gbi/app/contexts/product.context';

export default function CategoryList({
  categories,
  isLoading,
}: CategoryListProps) {
  return (
    <div className='max-h-80 max-w-60 w-full h-full  flex flex-col mb-5 overflow-y-auto border rounded-md py-3 px-6'>
      <p className='text-[#0E1422] font-medium py-4'>Categories</p>

      <RenderContent categories={categories} isLoading={isLoading} />
    </div>
  );
}

function RenderContent({ categories, isLoading }: CategoryListProps) {
  const context = useContext(ProductContext);

  function handleCategories(checked: boolean, value: string) {
    if (!context) {
      return;
    }
    let newCategories: string[] = [];

    if (checked) {
      newCategories = [...new Set([...context.categories, value])];
    }
    context.setCategories(newCategories);
  }

  if (isLoading) {
    return <LinearProgress />;
  }
  if (!categories.length) {
    <p>Não foi possível encontrar categorias</p>;
  }

  return (
    <>
      {categories.map((value) => (
        <div
          className='flex items-center border-b border-gray-300 pb-2 py-4'
          key={value.value}
        >
          <input
            id={`checkbox-${value.value}`}
            type='checkbox'
            className='form-checkbox text-gray-700 py-3'
            onChange={(event) =>
              handleCategories(event.target.checked, value.value)
            }
          />
          <label
            htmlFor={`checkbox-${value.value}`}
            className='ml-2 text-gray-700'
          >
            {value.label}
          </label>
        </div>
      ))}
    </>
  );
}
