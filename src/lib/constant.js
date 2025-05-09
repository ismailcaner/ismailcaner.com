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
        icon: < Instagram size={16} />,
    },
    {
        href:'https://medium.com/@ismailcaner',
        text:'Medium',
        icon: <AtSign size={16} />,
    },
    {
        href:'https://github.com/ismailcaner',
        text:'Github',
        icon: <Github size={16} />,
    },
    {
        href:'https://www.linkedin.com/in/canerdev/',
        text:'Linkedln',
        icon: <Linkedin size={16} />,
    },
    {
        href:'mailto:hello@ismailcaner.com',
        text:'Mail',
        name:'hello@ismailcaner.com',
    }
]

  