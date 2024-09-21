import React from 'react';
import HyperText from "@/components/magicui/hyper-text";
import { getRaindrop } from './api/api';

export async function getStaticProps() {
  const project = await getRaindrop()
  return { 
  props: {project},
  revalidate: 60,}
}

export default function Home({project}) {
  return (
    <div>
      {project.map((bookmark, index) => (
        <a key={index} href={bookmark.link} target="_blank">
          <div  style={{display:'flex', flexDirection:'column', gap:10, background:'white', padding:10, borderRadius:10, border:'1px solid lightgrey'}}>   
            <div style={{display:'flex', justifyContent:'space-between'}}>
              <span style={{display:'flex', alignItems:'center'}}>{bookmark.title}</span>
              <HyperText text="2024"/>
            </div>
              <img style={{borderBottom:'1px solid lightgrey'}} src={bookmark.cover}></img>
              <span style={{color:'grey', fontSize:15}} >{bookmark.note}</span>
          </div>
        </a>
      ))}
    </div>
  );
}