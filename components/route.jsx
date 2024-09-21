import React from 'react';
import Link from 'next/link';
import styles from '@/styles/css.module.css'
import { User, FolderOpen, Image, Bookmark} from 'lucide-react'

const MyComponent = ({home, photo, proj, bookmarks}) => {
  return (
    <div className={styles.desktoplink} style={{display:'flex', flexDirection:'column', justifyContent:'space-between', gap:5}}>
    <Link id={styles.home} className={styles.link} href="/" tabIndex="0">{home} <User size={16} /></Link>
    <Link id={styles.project}  className={styles.link} href="/projects" tabIndex="0"> {proj} <FolderOpen  size={16} /></Link>
    <Link id={styles.photo}  className={styles.link} href="/photos" tabIndex="0"> {photo} <Image  size={16} /></Link>
    <Link id={styles.bookmark}  className={styles.link} href="/bookmarks" tabIndex="0">{bookmarks} <Bookmark size={16} /></Link>
</div>

  );
}

export default MyComponent;