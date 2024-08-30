import { BreadCrumbItem, BreadCrumbProps } from './BreadCrumb.interface';

export default function BreadCrumb({ breadCrumbs }: BreadCrumbProps) {
  return (
    <div className='bg-[#F6F6F6] w-full h-16 flex flex-row  items-center'>
      <span className='text-[#5C5F6A] font-medium text-md sm:pl-0 md:pl-32'>
        Ecommerce
      </span>
      {breadCrumbs.map((value) => (
        <span key={value.path} className='flex flex-row items-center px-2'>
          <Separator />
          {RenderItem(value)}
        </span>
      ))}
    </div>
  );
}

function RenderItem({ label, path }: BreadCrumbItem) {
  return (
    <a href={path} className='hover:underline'>
      {label}
    </a>
  );
}

function Separator() {
  return (
    <svg
      className=' text-gray-400 mr-2 w-4'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M9 5l7 7-7 7'
      ></path>
    </svg>
  );
}
