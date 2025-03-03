import HyperText from "@/components/magicui/hyper-text";
import { getRaindrop, getMetaData} from '@/src/lib/apis';

export async function getStaticProps() {

  const pathname = '/projects'

  const seoData = await getMetaData();
  const seo = seoData.find((b) => b.fields.slug === pathname);
  const desc = seo?.fields?.desc || '';
  const title = seo?.fields?.title || '';
  const emoji2 = seo?.fields?.emoji || '';
  const url = seo?.fields?.urls || '';

  const project = await getRaindrop()
  return { 
  props: {project, title, desc, emoji2, url},
  revalidate: 60,}
}

export default function Home({project}) {

  return (
    <div className='animation' >
      {project.map((bookmark, index) => (
        <a key={index} href={bookmark.link} target="_blank">
          <div className="flex flex-col gap-[10px] dark:bg-[#3c3c3c] p-[10px] rounded-md bg-white dark:border-none border border-[ligthgrey]">   
            <div className="flex justify-between">
              <span className="flex items-center">{bookmark.title}</span>
              <HyperText text="2024"/>
            </div>
              <img className="border-b border-[ligthgrey]" src={bookmark.cover}></img>
              <span className="dark:text-white text-[15px] text-grey">{bookmark.note}</span>
          </div>
        </a>
      ))}
    </div>
  );
}