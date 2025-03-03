import {User, FolderOpen, Image, Bookmark, Instagram, Github, Linkedin, AtSign, LampDesk, Mail, MailOpen} from 'lucide-react';

export const PAGES= [
    {
        href:'/',
        text:'Hakkımda',
        icon: <User size={16} />,
    },
    {
        href:'/photos',
        text:'Fotoğraflar',
        icon: <Image size={16} />,
    },
    {
        href:'/workspace',
        text:'Workspace',
        icon: <LampDesk size={16} />,
    },
    {
        href:'/projects',
        text:'Projeler',
        icon: <FolderOpen size={16} />,
    },
   
    {
        href:'/bookmarks',
        text:'Yer imleri',
        icon: <Bookmark size={16} />,
    }
]

export const SOCİAL= [
    {
        href:'https://www.instagram.com/lsmailcaner',
        text:'Instagram',
        name:'lsmailcaner',
        icon: < Instagram size={16} />,
        delay: '1.1'
    },
    {
        href:'https://medium.com/@ismailcaner',
        text:'Medium',
        name:'@ismailcaner',
        icon: <AtSign size={16} />,
        delay: '1.2'
    },
    {
        href:'https://github.com/ismailcaner',
        text:'Github',
        name:'ismailcaner',
        icon: <Github size={16} />,
    },
    {
        href:'https://www.linkedin.com/in/canerdev/',
        text:'Linkedln',
        name:'canerdev',
        icon: <Linkedin size={16} />,
    },
    {
        href:'mailto:hello@ismailcaner.com',
        text:'Mail',
        name:'hello@ismailcaner.com',
        icon: <Mail size={16} />,
        iconMail: <Mail size={16} />,
        iconMailOpen: <MailOpen size={16} />,
        delay: '1.5'
    }
]

  