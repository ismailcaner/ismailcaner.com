import { ListFilter, Link2} from 'lucide-react';
import { getBookmarks, getMetaData } from '@/src/lib/apis';
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export async function getStaticProps() {
  const pathname = '/bookmarks'

  const seoData = await getMetaData();
  const seo = seoData.find((b) => b.fields.slug === pathname);
  const desc = seo?.fields?.desc || '';
  const title = seo?.fields?.title || '';
  const emoji2 = seo?.fields?.emoji || '';
  const url = seo?.fields?.urls || '';

  const bookmarks = await getBookmarks({ perPage: 50, page: 0 });
  return { 
  props: {bookmarks, title, desc, emoji2, url},
  revalidate: 60, }
}

export default function Home({bookmarks}) {
  const [category, setCategory] = useState('all');
  const categories = ["App", "Icon", "Portfolio", "Frontend", "Wallpaper"];
  const sortedCategories = categories.sort((a, b) => a.localeCompare(b));
  
  const filteredRecords = !category || category === 'all' 
  ? bookmarks 
  : bookmarks.filter(bookmark => bookmark.tags.includes(category));
  
  const categoryCounts = categories.reduce((acc, category) => {
    const count = bookmarks.filter(bookmark => bookmark.tags.includes(category.toLowerCase())).length;
    acc[category] = count;
    return acc;
  }, {});

  const categorybookmars = bookmarks.length;
  const totalbookmarks = filteredRecords.length;
  const referralId = 'ismailcaner.com'; 
  const defaultOg = 'https://ismailcaner.com/images/defaultOg.avif';


  return (
    <div className='flex flex-col gap-[5px]'>
      
      <div className='mb-[5px] flex justify-between items-center'>
        <div className='flex flex-col'>
          <span className='capitalize text-[14px]'>{category === 'all' ? 'Hepsi' : category}</span>
          <span className='text-[grey] text-[14px]'>{totalbookmarks} Yer imi</span>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger >
            <span variant="outline"><ListFilter size={16}/></span>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="mr-[20px]">
            <DropdownMenuRadioGroup variant={'default'} onValueChange={setCategory} value={category}>
              <DropdownMenuRadioItem className="flex justify-between" value='all' >
                <span>Hepsi</span><span className='text-[grey] text-right'>{categorybookmars}</span>
              </DropdownMenuRadioItem>
              <DropdownMenuSeparator />
              {sortedCategories.map((category, index) => (
                <DropdownMenuRadioItem className="flex justify-between" key={index} value={category.toLowerCase()}>
                  {category} <span className='text-[grey] text-right'>{categoryCounts[category]}</span>
                </DropdownMenuRadioItem>
              ))}
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className='flex gap-[10px] h-[85vh] overflow-y-scroll grid sm:grid-cols-[repeat(2,_minmax(0,_1fr))] grid-cols-[repeat(1,_minmax(0,_1fr))]'>
        {filteredRecords.map((bookmark, index) => ( 
          <div key={index} className='flex justify-between border dark:border-[#a9a9a9] border-[#e2e8f0] p-[10px] rounded-md relative dark:bg-[#3c3c3c] aspect-[2/1] gap-[20px] flex-col-reverse'>
            <div className='flex flex-col justify-evenly w-[75%]'>
              <a href={`${bookmark.link}?ref=${referralId}`} target="_blank">
                <span className='flex items-center gap-[5px]'>
                  <Link2 size={16}/>{bookmark.domain}
                </span>
              </a>
                <span className='text-[12px] text-[#808080]'>{bookmark.excerpt}</span>
                <span className='hidden'>{bookmark.tags}</span>
            </div>
            <div className='flex items-center'>
              <img className="animation w-[100%] rounded-lg object-cover" src={bookmark.cover} alt="Bookmark Cover" onError={(e) => e.target.src = defaultOg} />
            </div>
          </div>    
        ))}
      </div>

    </div>
  );
}
