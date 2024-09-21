import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '@/styles/css.module.css';
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator"
import { Navigation, User, FolderOpen, Menu, Image, Bookmark, Instagram, Github, Linkedin} from 'lucide-react'
import {
  Drawer,
  DrawerContent,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"

const MyComponent = ({ home, photo, proj, bookmarks }) => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const handleClose = () => setIsOpen(false);

  const me = 'https://www.ismailcaner.com/images/me.JPG';

  const getButtonVariant = (path) => {
    return router.pathname === path ? 'white' : 'transparent';
  };

  return (
    <div className={styles.mobilelink}>
      <Drawer  open={isOpen} onOpenChange={setIsOpen}>
      <DrawerTrigger style={{ background:'white',border:'1px solid #e2e8f0', padding:5, borderRadius:7}}> <Menu /> </DrawerTrigger>
        <DrawerContent style={{ padding: 20, background:'#f1f1f1' }}>
          <DrawerTitle>
    
              <div  style={{ display: 'flex', gap: 10, marginBottom:25, alignItems: 'center' }}>
                <img
                  style={{ aspectRatio: 1, width: 50, height: 50, objectFit: 'cover', borderRadius: 10 }}
                  src={me}
                />
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <span>İsmail Caner</span>
                  <span style={{ fontSize: 13, color: 'grey'}}>Frontend Developer</span>
                </div>
              </div>
      
            </DrawerTitle>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 5, marginBottom:20}}>
            <Button style={{color:'black', background:getButtonVariant('/')}} onClick={handleClose}>
              <Link className={styles.link} href="/" tabIndex="0" prefetch={true}>
                {home} <User size={16} />
              </Link>
            </Button>
            <Button style={{color:'black', background:getButtonVariant('/projects')}}onClick={handleClose}>
              <Link className={styles.link} href="/projects" tabIndex="0" prefetch={true}>
                {proj} <FolderOpen  size={16}/>
              </Link>
            </Button>
            <Button style={{color:'black', background:getButtonVariant('/photos')}} onClick={handleClose}>
              <Link className={styles.link} href="/photos" tabIndex="0" prefetch={true}>
                {photo} <Image size={16} />
              </Link>
            </Button>
            <Button style={{color:'black', background:getButtonVariant('/bookmarks')}} onClick={handleClose}>
              <Link className={styles.link} href="/bookmarks" tabIndex="0" prefetch={true}>
                {bookmarks} <Bookmark size={16}/>
              </Link>
            </Button>
            </div>
            <Separator />
<div style={{display:'flex', flexDirection:'column', gap:5, marginTop:20}}>
            <Button variant='outline' onClick={handleClose}>
            <a className={styles.link} style={{color:'black', display:'flex', alignItems:'center'}} href='https://www.instagram.com/lsmailcaner' target="_blank"> Instagram <Instagram size={16} /></a>
            </Button>
            <Button variant='outline' onClick={handleClose}>
            <a className={styles.link} style={{color:'black', display:'flex', alignItems:'center'}} href='https://github.com/ismailcaner'  target="_blank"> Github <Github size={16} /></a>
            </Button>
            <Button variant='outline' onClick={handleClose}>
            <a className={styles.link} style={{color:'black', display:'flex', alignItems:'center'}} href='https://www.linkedin.com/in/canerdev/' target="_blank"> Linkedln <Linkedin size={16} /> </a>
            </Button>
      
              <Button variant='outline' onClick={handleClose}>
                <a style={{ display:'flex', alignItems:'center'}} href="mailto:hello@ismailcaner.com">hello@ismailcaner.com <Navigation size={16} /></a>
              </Button>
              </div>
              
         
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default MyComponent;
