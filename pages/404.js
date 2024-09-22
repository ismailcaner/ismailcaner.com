import { ArrowLeft, Ban} from 'lucide-react';

export default function Custom404() {
  return (
    <div style={{ display:'flex', flexDirection:'column', gap:'3rem', textAlign: 'center', padding: '50px', justifyContent:'center', alignItems:'center'}}>
      <div style={{display:'flex', flexDirection:'column', gap:'0.5rem', alignItems:'center', justifyContent:'center'}}>
        <Ban color='#FF6969' />
        <span style={{fontWeight:'bold'}}> Aradığınız sayfa mevcut değil. </span>
      </div>
        <span style={{display:'flex', flexDirection:'row', gap:'0.3rem', alignItems:'center'}}><ArrowLeft size={16}/> Sol menüdeki seçenekler ile devam edebilirsiniz.</span>
    </div>
  );
}
