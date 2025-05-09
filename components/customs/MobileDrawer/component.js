import { useState } from 'react';
import { PAGES } from "@/src/lib/constant";
import { Button } from "@/components/ui/button";
import { Menu } from 'lucide-react';
import { ScrollArea } from "@/components/ui/scroll-area";
import { Drawer,
  DrawerContent,
  DrawerTitle,
  DrawerTrigger } from "@/components/ui/drawer";
import Sociallinks from '@/components/customs/Socials/component';
import MobileProfile from '@/components/customs/MobileProfile/component';
import PagesButton from '@/components/customs/Buttons/Pages-buttons';

const MyComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => setIsOpen(false);

  return (
    <div>
      <Drawer open={isOpen} onOpenChange={setIsOpen}>
        <DrawerTrigger>
          <Menu/>
        </DrawerTrigger>
        <DrawerContent aria-describedby={undefined} className='p-[20px] bg-[#f1f1f1] dark:bg-[#282828]'>
        <ScrollArea className="h-[75dvh]">
          <DrawerTitle>
            <MobileProfile/>
          </DrawerTitle>
          <div className="group flex flex-col gap-1 mb-[20px]">
          {PAGES.map((page) => (
            <PagesButton
              key={page.id}
              onClick={handleClose}
              text={page.text}
              icon={page.icon}
              href={page.href}
            />
          ))}
        </div> 
        
          <hr className='border-[0.1px] border-[#a9a9a9]'/>
            <div className='flex flex-col mt-[20px] gap-[5px]'>
              <Sociallinks  onClick={handleClose} />
                <Button className='dark:bg-[#3c3c3c] border-[1px] dark:border-[#808080]' variant='outline' onClick={handleClose}>
                  <a className='flex items-center' href="mailto:hello@ismailcaner.com">hello@ismailcaner.com</a>
                </Button>
            </div>
            </ScrollArea>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default MyComponent;