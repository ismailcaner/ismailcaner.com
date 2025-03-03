import { Separator } from "@/components/ui/separator"
import { Analytics } from '@vercel/analytics/react';
import { SOCİAL, PAGES } from "@/src/lib/constant";
import { usePathname } from 'next/navigation'
import PagesButton from '@/components/customs/Buttons/Pages-buttons'
import MobileDrawer from "@/components/customs/MobileDrawer/component";
import DeskProfile from '@/components/customs/DeskProfile/component';

const Layout = ({ children }) => {

const pathname = usePathname()
const pathAfterSlash = pathname.split('/')[1];

const titles = {
  '': 'Hakkımda',
  blog: 'Yazılar',
  photos: 'Fotograflar',
  workspace: 'Workspace',
  projects: 'Projeler',
  bookmarks: 'Yer imleri',
};

const title = titles[pathAfterSlash] || null;

return (
<div className="lg:py-[20px] px-[10px] flex justify-center gap-[25px]">

<div className='hidden lg:flex h-[100%] flex-col gap-[10px]'>
  <div className='dark:bg-[#3c3c3c] bg-[#f5f5f5] p-[20px] rounded-md flex flex-col gap-[15px] w-[230px]'>
    <DeskProfile />
    <Separator />
    <span className="group flex flex-col gap-1">
      {PAGES.map((page) => (
        <PagesButton
        buttonClass={'text-[13px]'}
          key={page.id}
          text={page.text}
          icon={page.icon}
          href={page.href}
        />
      ))}
    </span>
  </div>

  <div className={'dark:bg-[#3c3c3c] rounded-md p-4 bg-[#f5f5f5]'}>
    <span className="flex flex-col gap-1">
      {SOCİAL.slice(0, -1).map((link) => (

          <PagesButton
            key={link.id}
            text={link.text}
            icon={link.icon}
            href={link.href}
          />
      
      ))}
    </span>
  </div>

  <div className='text-[15px] justify-end'>
    {SOCİAL.slice(4).map((link, linkIndex) => (
      <a
        key={linkIndex}
        className="group flex items-center gap-5"
        href={link.href}
        target="_blank"
      >
        <div className={'w-full justify-center hidden md:flex relative flex flex-row gap-2 items-center border-[1px] p-2 rounded-md md:group-hover:dark:bg-white md:group-hover:bg-black md:group-hover:dark:text-black md:group-hover:text-white duration-300' }>
          <span>
            {link.name}
          </span>
          <span className="relative z-10 flex flex-row items-center gap-1 text-[12px]">
            {link.icon}
          </span>
        </div>
      </a>
    ))}
  </div>
</div>

    

  <div className='flex flex-col lg:w-[60%] lg:gap-[0px] w-[100%] gap-[20px]'>
    <div className="dark:bg-[#282828] bg-white  sticky top-[0px] z-50 flex flex-row justify-between lg:hidden border-b-[1px] dark:border-[#3c3c3c] py-[10px] w-full items-center">
      <span className="lg:hidden text-[14px] font-semibold">
        {title}
      </span>
      <MobileDrawer />
    </div>
    <main className='p-[0px] flex  justify-center'>{children}</main>
    <Analytics />
  </div>
</div>
);
};
export default Layout;
