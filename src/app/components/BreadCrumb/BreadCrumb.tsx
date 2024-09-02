import Link from 'next/link';
import { BreadCrumbItem, BreadCrumbProps } from './breadCrumb.interface';

export default function BreadCrumb({ breadCrumbs, title }: BreadCrumbProps) {
  return (
    <div className='bg-[#F6F6F6] w-full h-16 py-16 flex items-center'>
      <div
        className={
          'flex flex-col justify-center ' + title ? 'sm:pl-0 md:pl-32' : ''
        }
      >
        {title && (
          <h2 className='text-[#0E1422] font-bold text-2xl mb-2'>{title}</h2>
        )}

        <div className='flex flex-row  items-center'>
          <Link href='/' className='text-[#5C5F6A] font-medium text-md '>
            Ecommerce
          </Link>
          {breadCrumbs.map((value) => (
            <span key={value.path} className='flex flex-row items-center px-2'>
              <Separator />
              {RenderItem(value)}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function RenderItem({ label, path }: BreadCrumbItem) {
  return (
    <Link href={path} className='hover:underline'>
      {label}
    </Link>
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
