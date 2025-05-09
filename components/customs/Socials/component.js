import { Button } from "@/components/ui/button";
import { SOCİAL } from '@/src/lib/constant';

const MyComponent = ({onClick}) => {
 
return (
  <div className=' flex flex-col gap-1'>
    {SOCİAL.map((link, linkIndex) => (
      linkIndex < SOCİAL.length - 1 && ( 
    <Button key={linkIndex} className="dark:bg-[#3c3c3c] dark:border-[#808080]" variant='outline' onClick={onClick}>
      <a className="flex items-center text-[15px] w-[100%] justify-between mx-[1px] my-[10px]" href={link.href} target="_blank"> {link.text} {link.icon}</a>
    </Button>
        )
    ))}
  </div>
  );
}

export default MyComponent;
