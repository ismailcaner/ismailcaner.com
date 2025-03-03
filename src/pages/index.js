import HyperText from "@/components/magicui/hyper-text";
import { getHomePage, getMetaData  } from '@/src/lib/apis'

export async function getStaticProps() {

  const pathname = '/';
  
  const seoData = await getMetaData();
  const seo = seoData.find((b) => b.fields.slug === pathname);
  const desc = seo?.fields?.desc || '';
  const title = seo?.fields?.title || '';
  const emoji2 = seo?.fields?.emoji || '';
  const url = seo?.fields?.urls || '';

  const blogs = await getHomePage();
  return {
    props: {blogs, title, desc, emoji2, url },
    revalidate: 60}
}

export default function Home({ blogs }) {
  const me = '/images/me.JPG';
  const banner = '/images/banner.jpeg';

return (

<div className='flex flex-col sm:gap-[50px] sm:gap-[25px] gap-[50px] sm:w-[60%] relative'>

    <div className='flex flex-col gap-[10px]'>  
      <img alt='banner' className={`animation border-[3px] dark:border-[#282828] object-cover h-[150px] w-full rounded-[10px]`} src={banner}></img>
      <img alt='İsmail Caner' className={`animation absolute left-[20px] top-[112.5px] rounded-full object-cover w-[75px] h-[75px] border-[3px] dark:border-[#282828]`}  src={me}/>
      
    </div>
    {blogs.map((blog, index) => (
  <div  key={index} className='flex flex-col gap-[50px]'>

      <div className='flex flex-col gap-[20px]'>

        <span className='hidden md:block'>{blog.fields.aboutTitle}</span>
        <span className=' text-[gray] text-[15px]'>   {blog.fields.aboutContent}</span>
            
          <div className='flex justify-end'>
              <div className='flex flex-col text-[15px] text-[gray] ml-[10px] font-normal'>
                <span>{blog.fields.someTimeContent1}</span>
                <span>{blog.fields.someTimeContent2}</span>
                <span>{blog.fields.someTimeContent3}</span>
              </div>
          </div>
      </div>

      <div>
        <span>{blog.fields.eduTitle}</span>
        <div className='flex flex-row items-center gap-5'>
          <span className='text-[15px] text-[#808080]'>
            <HyperText text="2022 - 2024"/>
          </span>
        <div className='flex flex-row items-center gap-2'>
          <div>
            <img src={blog.fields.eduIconContent} width={25}></img>
          </div>
          <div className=' flex flex-col'>
            <span className='text-[15px]'>
              {blog.fields.eduNameContent}
            </span>
            <span className='text-[12px] text-[#808080]'>
              {blog.fields.eduDepartmentContent}
            </span>
          </div>
        </div>
        </div>
      </div>

  </div>
))}
</div> 

);
}

