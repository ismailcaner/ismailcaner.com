import React, { useState } from 'react';
import { ListFilter, Link2} from 'lucide-react';
import { Button } from "@/components/ui/button"
import styles from '@/styles/css.module.css';
import { getBookmarks } from './api/api';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export async function getStaticProps() {
  const bookmarks = await getBookmarks({ perPage: 50, page: 0 });
  return { 
  props: {bookmarks},
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
    <div style={{display:'flex', flexDirection:'column', gap:5}}>
      
      <div style={{ marginBottom: 5, display:'flex', justifyContent:'space-between', alignItems:'center'}} >
        <div style={{display:'flex', flexDirection:'column'}}>
          <span style={{textTransform:'capitalize', fontSize:14}}>{category === 'all' ? 'Everyting' : category}</span>
          <span style={{fontSize:14, color:'grey'}}>{totalbookmarks} Bookmarks</span>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline"><ListFilter size={16}/></Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent style={{marginRight:20}}>
            <DropdownMenuRadioGroup variant={'default'} onValueChange={setCategory} value={category}>
              <DropdownMenuRadioItem style={{display:'flex', justifyContent:'space-between'}} value='all' >
                <span>All</span><span style={{color:'grey', textAlign:'end'}}>{categorybookmars}</span>
              </DropdownMenuRadioItem>
              <DropdownMenuSeparator />
              {sortedCategories.map((category, index) => (
                <DropdownMenuRadioItem style={{display:'flex', justifyContent:'space-between'}}  key={index} value={category.toLowerCase()}>
                  {category} <span style={{color:'grey', textAlign:'end'}}>{categoryCounts[category]}</span>
                </DropdownMenuRadioItem>
              ))}
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className={styles.productsGrid2}>
        {filteredRecords.map((bookmark, index) => ( 
          <div key={index} style={{display:'flex', justifyContent:'space-between', border:'1px solid #e2e8f0', padding:10, borderRadius:10,  position:'relative', background:'white', aspectRatio: 2 / 1, gap:20, flexDirection:'column-reverse'}}>
            <div style={{display:'flex', flexDirection:'column', justifyContent:'space-evenly', width:'70%'}}>
              <a href={`${bookmark.link}?ref=${referralId}`} target="_blank">
                <span style={{ display: 'flex', alignItems:'center', gap:5}}>
                  <Link2 size={16}/>{bookmark.domain}
                </span>
              </a>
                <span style={{fontSize:12, color:'grey'}}>{bookmark.excerpt}</span>
                <span style={{display:'none'}}>{bookmark.tags}</span>
            </div>
            <div style={{display:'flex', alignItems:'center'}}>
              <img style={{ width:'100%', borderRadius:10, objectFit:'cover'}} src={bookmark.cover || defaultOg} alt="Bookmark Cover"/>
            </div>
          </div>    
        ))}
      </div>

    </div>
  );
}
