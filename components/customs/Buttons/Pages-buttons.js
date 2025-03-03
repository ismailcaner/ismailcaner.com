'use client'

import { Button } from '@/components/ui/button';
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const MyComponent = ({key, text, icon, href, buttonClass, onClick}) => {

  const pathname = usePathname()
  const isActive = pathname === href


return (
  <Link legacyBehavior href={href}>
    <Button key={key} className={`${buttonClass} ${'dark:text-white lg:dark:hover:bg-[#282828] text-black lg:hover:bg-white h-fit py-2 flex flex-row items-center  w-[100%] justify-between rounded-md bg-transparent'}
    ${isActive 
        ? 'md:dark:bg-[#282828] md:bg-white dark:bg-[#3c3c3c] bg-white'
        : 'null'}`}
        onClick={onClick}>
          {text}
          {icon}
    </Button>
  
  </Link>

  );
};

export default MyComponent;
