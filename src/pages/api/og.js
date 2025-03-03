import { ImageResponse } from '@vercel/og'

export const config = {
  runtime: 'edge',
}

export default function handler(req) {
  const { searchParams } = new URL(req.url)
  const title2 = searchParams.get('title') || 'İsmail Caner'
  const description = searchParams.get('description') || 'Frontend Developer'
  const emoji = searchParams.get('emoji') || ''
  const bg = searchParams.get('bg') || '#f8f8f8'
  const color = searchParams.get('color') || '#333'

  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          height: '100%',
          backgroundColor: 'white',
      
        }}
      >
        <div
        style={{
          display:'flex',
          justifyContent: 'center',
          alignItems: 'flex-start',
          flexDirection:'column',
          borderRadius:'25px',
          background:'#f1f1f1',
          width:'95%',
          height:'90%',
          color:'black',
          paddingLeft:'8%',
          gap:'15px'
        }}>
           <span style={{fontSize:'48px'}}>{title2}</span>
           <span style={{ fontSize: '24px', width:'50%'}}>{description}</span>

        </div>
       
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}
