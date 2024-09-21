import styles from '@/styles/css.module.css';
import React from 'react';
import { ArrowUpRight, GraduationCap, Mail } from 'lucide-react';
import HyperText from "@/components/magicui/hyper-text";
import { getUsercontent } from './api/api';
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@/components/ui/table"

export async function getStaticProps() {
  const usercontent = await getUsercontent();
  return {
    props: {usercontent},
    revalidate: 60,};
}

export default function Home({ usercontent }) {
  const me = '/images/me.JPG';
  const banner = '/images/banner.jpeg'

  return (
    <div className={styles.testbanner} style={{display:'flex', flexDirection:'column', gap:50, position:'relative'}}>

    <div style={{display:'flex', flexDirection:'row', gap:10}}>  
      <img className={styles.banner} src={banner}></img>
      <img alt='İsmail Caner' className={styles.userphoto} style={{width:75, height:75, objectFit:'cover', borderRadius:100, position:'absolute', left:20, top:112.5}} src={me}/>
    </div>

      {usercontent.map(record => (
        <div key={record.id} style={{display:'flex', flexDirection:'column', gap:50}}>

          <div style={{display:'flex', flexDirection:'column', gap:20}}>
              <span style={{fontSize:16, fontWeight:'400'}}>Hakkımda</span>
              <span style={{fontSize:15, color:'grey', marginLeft:10}}> {record.fields.about} </span>   
            <div style={{display:'flex', flexDirection:'column'}}>
              <span style={{fontSize:16, fontWeight:'400', color:'black'}}>Aynı zamanda;</span>
              <div style={{display:'flex', flexDirection:'column', fontSize:15, fontWeight:'400', color:'grey', marginLeft:10}}>
                <span>{record.fields.sametime}</span>
                <span>{record.fields.sametime2}</span>
                <span>{record.fields.sametime3}</span>
              </div>
            </div>
          </div>

        <div>
          <span style={{display:'flex', flexDirection:'row', alignItems:'center', gap:3}}>Eğitim <GraduationCap size={16} /></span>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell style={{fontSize:15, color:'grey', width:111}}>
                    <HyperText text="2022 - 2024"/>
                  </TableCell>
                  <TableCell style={{display:'flex', flexDirection:'row', gap:5, alignItems:'center'}}>
                    <img src='https://selcuk.edu.tr/img/logo_tr.png' width={25}></img>
                    <div style={{display:'flex', flexDirection:'column', }}>
                      <span>Selçuk üniversitesi</span>
                      <span style={{fontSize:12, color:'grey'}}>Bilgisayar programcılığı</span>
                    </div>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
        </div>

        <div style={{display:'flex', flexDirection:'column', gap:10,fontWeight:'400'}}>
          <span style={{display:'flex', flexDirection:'row', alignItems:'center', gap:3}}>İletişim <Mail size={16} /></span>
          <div style={{display:'flex', flexDirection:'row', gap:10, color:'grey', fontWeight:'300', marginLeft:10}}>
            <div style={{display:'flex', flexDirection:'column', gap:10, fontWeight:'300', fontSize:13}}>
              <span>Instagram</span><span>Github</span><span>Mail</span>
            </div>
            <div style={{display:'flex', flexDirection:'column', gap:10, fontWeight:'300', marginLeft:20, fontSize:13}}>
              <a style={{color:'black', display:'flex', alignItems:'center'}} href={record.fields.insta} target="_blank">Ismailcaner <ArrowUpRight size={16} /></a>
              <a style={{color:'black', display:'flex', alignItems:'center'}} href={record.fields.github} target="_blank">ismailcaner <ArrowUpRight size={16}  /></a>
              <a style={{color:'black', display:'flex', alignItems:'center'}} href="mailto:hello@ismailcaner.com">hello@ismailcaner.com <ArrowUpRight size={16} /></a>
            </div>
          </div>
        </div>

        </div>
      ))}
    </div>
);
}


