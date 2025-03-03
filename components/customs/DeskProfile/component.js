import ToggleButton from '@/components/customs/Buttons/Dark-mod';
import Link from 'next/link';

const MyComponent = () => {

return (
    <div className='flex item-center justify-between'>  
      <Link href='/' className=' dark:hover:bg-[#282828] hover:bg-white rounded-md duration-300'>
      <div className='flex flex-col mx-3 my-1 group'>
        <span>İsmail Caner</span>
        <span className='text-[13px] text-gray-400 dark:text-white'>Frontend Developer</span>
      </div>
      </Link>
    <ToggleButton />
  </div>
  );
}
export default MyComponent;
