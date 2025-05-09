import { getPhotos, getPhotosStats, getMetaData } from '@/src/lib/apis';
import Link from 'next/link';
import { ArrowDownToLine, Eye } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";

export async function getStaticProps() {
  const pathname = '/photos';

  const seoData = await getMetaData();
  const seo = seoData.find((b) => b.fields.slug === pathname);
  const desc = seo?.fields?.desc || '';
  const title = seo?.fields?.title || '';
  const emoji2 = seo?.fields?.emoji || '';
  const url = seo?.fields?.urls || '';

  const data = await getPhotosStats();
  const photo = await getPhotos();
  return {
    props: {data, photo, title, desc, emoji2, url},
    revalidate: 100,
  };
}

export default function Photos({ photo, data }) {
  const views = [data.views.total]
  const downloads = [data.downloads.total]
  return (
<div>
  <div className='flex flex-row gap-[10px] w-full justify-center mb-[10px]'>
    <Link className=' sm:hover:bg-[#f5f5f5] sm:dark:hover:bg-[#3c3c3c] duration-300 border-[2px] dark:border-gray-500 px-[25px] py-[5px] flex flex-col items-center rounded-md w-full'
      href={'https://unsplash.com/@ismailcaner/stats'}
      target="_blank">
        <span>İndirmeler</span>
      {downloads.toLocaleString()}
    </Link>
    <Link className=' sm:hover:bg-[#f5f5f5] sm:dark:hover:bg-[#3c3c3c] duration-300 border-[2px] dark:border-gray-500 px-[25px] py-[5px] flex flex-col items-center rounded-md w-full'
      href={'https://unsplash.com/@ismailcaner/stats'}
      target="_blank">
        <span>Görüntülemeler</span>
      {views.toLocaleString()}
    </Link>
  </div>

  <div className='flex gap-[10px] h-[85vh] overflow-y-scroll grid md:grid-cols-[repeat(3,_minmax(0,_1fr))] grid-cols-[repeat(1,_minmax(0,_1fr))]'>
    {photo.map((photoItem) => (
      <div key={photoItem.id} className='flex justify-center '>
        <Dialog>
          <DialogTrigger className='group sm:filter dark:sm:brightness-50 dark:hover:brightness-100 duration-300 flex items-end'>
          <span className=' hidden group-hover:flex absolute bottom-2 left-2 gap-2 bg-white/25 backdrop-blur-md px-1 rounded-sm'>
            <div className='flex gap-0.5 text-[14px] items-center text-white font-[100]' >
              <span><Eye size={16}/></span>
              <span>{photoItem.views}</span>
            </div>
            <div className='flex gap-0.5 text-[14px] items-center text-white font-[100]' >
              <span><ArrowDownToLine size={16} /></span>
              <span>{photoItem.downloads}</span>
            </div>
        </span>
            <img className={`animation aspect-[1] object-cover rounded-lg`} src={photoItem.urls.raw} />
              <a href={`${'https://unsplash.com/photos/'+photoItem.id}`} target="_blank" onClick={(a) => a.stopPropagation()}>
                <span className='absolute bottom-2 right-3 hidden group-hover:block rounded-sm px-[5px] py-[2px] bg-white/25 backdrop-blur-md'>
                  <ArrowDownToLine size={16} color='white' />
                </span>
              </a>
        
          </DialogTrigger>
          <DialogContent className='flex flex-col'>
            <img className='animation object-contain aspect-[1]' src={photoItem.urls.raw} />
          
          </DialogContent>
        </Dialog>
       
      </div>
    ))}
    <footer className='sm:hidden'></footer>
  </div>

</div>
  );
}
