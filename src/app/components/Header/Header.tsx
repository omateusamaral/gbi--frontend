import Image from 'next/image';

export default function Header() {
  return (
    <div className='flex flex-row justify-between w-full h-20'>
      <div className='flex flex-row items-center'>
        <Image alt='logo' src='/logo.png' width={40} height={35} />
        <p className='font-extrabold text-xl ml-3'>Ecommerce</p>
      </div>
      <div className='flex flex-row items-center'>
        <p className='text-[#5C5F6A] font-medium text-sm mr-8'>Home</p>
        <p className='text-[#5C5F6A] font-medium text-sm mr-8'>Categorias</p>
        <p className='text-[#5C5F6A] font-medium text-sm mr-8'>Sobre</p>
        <p className='text-[#5C5F6A] font-medium text-sm mr-8'>Contato</p>
      </div>
    </div>
  );
}
