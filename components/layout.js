import Pages from '@/components/route';
import Mobilelink from "@/components/mobilelinks";
import { Separator } from "@/components/ui/separator"
import { Analytics } from '@vercel/analytics/react';
import styles from '@/styles/css.module.css';
import { Instagram, Github, Linkedin} from 'lucide-react'
import { Badge } from "@/components/ui/badge"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

const Layout = ({ children }) => {
const pp = 'https://ismailcaner.com/images/me.JPG';

return (
  <div style={{ padding:'20px 10px', display:'flex', justifyContent:'center', gap:25}}>
    <div className={styles.desktoplink} style={{height:'100%', flexDirection:'column', gap:10}}>
      <div style={{padding:20, borderRadius:10, background:'#f5f5f5', display:'flex', flexDirection:'column', gap:15, width:230}}>

        <div style={{display:'flex', alignItems:'center', gap:10}}>  
          <div style={{display:'flex', flexDirection:'column'}}>
            <span>İsmail Caner</span>
            <span style={{fontSize:13, color:'grey'}}>Frontend Developer</span>
          </div>
        </div>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger><Badge variant="outline" style={{fontSize:13, color:'grey', fontWeight:400, display:'flex', flexDirection:'row', gap:5, width:'fit-content' , alignItems:'center'}}> <span className={styles.dot} style={{color:'#8ed3ba'}}> </span><span>Open to Work</span></Badge></TooltipTrigger>
            <TooltipContent>
              <span>Send to Mail</span>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      <Separator />
      
      <div>
        <Pages
        className={styles.test} home={'Hakkımda'}
        photo={'Fotograflar'}
        bookmarks={'Yer imleri'}
        proj={'Projeler'}/>
      </div>          
      </div>

    <div style={{borderRadius:10, padding:10, background:'#f5f5f5'}}>
      <div style={{display:'flex', flexDirection:'column', gap:10, padding:10, fontSize:14}}>
        <a style={{color:'black', display:'flex', alignItems:'center', justifyContent:'space-between'}} href='https://www.instagram.com/lsmailcaner' target="_blank">Instagram <Instagram size={16} /> </a>
        <a style={{color:'black', display:'flex', alignItems:'center', justifyContent:'space-between'}} href='https://github.com/ismailcaner' target="_blank">Github <Github size={16} /> </a>
        <a style={{color:'black', display:'flex', alignItems:'center', justifyContent:'space-between'}} href='https://www.linkedin.com/in/canerdev/' target="_blank">LinkedIn <Linkedin size={16} /> </a>
          <Separator />
        <a style={{color:'black', display:'flex', alignItems:'center', justifyContent:'center', background:'white', borderRadius:5, padding:10}} href="mailto:hello@ismailcaner.com"> hello@ismailcaner.com </a>
      </div>
    </div>
    </div>

  <div className={styles.testmain} style={{ display:'flex', flexDirection:'column'}}>  
    <div className={styles.mobiletest} style={{ borderRadius:10, display:'flex', flexDirection:'row', justifyContent:'space-between', alignItems:'flex-start'}}>

      <div className={styles.usercontenttest} style={{ flexDirection:'row', gap:10, alignItems:'flex-start'}}>  
        <div style={{display:'flex', flexDirection:'column', gap:20}}>
          <div style={{display:'flex', flexDirection:'column'}}>
            <span>İsmail Caner</span>
            <span style={{fontSize:13, color:'grey'}}>Frontend Developer</span>
          </div>
        <Badge variant="outline" style={{fontSize:13, color:'grey', gap:5}}> <span className={styles.dot} style={{color:'#8ed3ba'}}></span> <span>Open to Work</span></Badge>
        </div>
      </div>

      <div>
        <Mobilelink 
        home={'Hakkımda'}
        proj={'Projeler'}
        photo={'Fotograflar'}
        bookmarks={'Yer imleri'} />
      </div>
      
    </div>
      <main className={styles.main} style={{borderRadius:10, display:'flex', justifyContent:'center'}}>{children}</main>
      <Analytics />
  </div>

  </div>
);
};
export default Layout;
