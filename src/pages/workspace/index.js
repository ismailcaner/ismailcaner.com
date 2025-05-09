import { ArrowUpRight } from 'lucide-react';
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table";
import { getWorkspace, getMetaData } from '@/src/lib/apis';
import Customtext from "@/components/customs/Text/component";
  
  export async function getStaticProps() {
    const pathname = '/workspace';

    const seoData = await getMetaData();
    const seo = seoData.find((b) => b.fields.slug === pathname);
    const desc = seo?.fields?.desc || '';
    const title = seo?.fields?.title || '';
    const url = seo?.fields?.urls || '';

    const Product = await getWorkspace();
    return {
      props: { Product, title, desc, url},
      revalidate: 60}
  }

  
export default function Home({ Product }) {
  return (
    <div className="overflow-hidden">

      <div className="border rounded-md dark:border-[#3c3c3c]">
        <Table>
          <TableCaption className="text-[12px] mb-5 text-[gray]">
            Daha fazlası için{' '}
            <span className="dark:text-white text-black underline">
              <a href="https://inspov1.vercel.app/">inspo.</a>
            </span>
          </TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="min-w-[300px] text-[gray]">Ürün</TableHead>
              <TableHead className="min-w-[300px] text-[gray]">Özellik</TableHead>
              <TableHead className="min-w-[70px] px-4 text-[gray]">Link</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="lg:dark:hover:text-[#4a4a4a] lg:hover:text-[#d3d3d3]">
            {Product.map((Product,  productsIndex)  => {
              const delay = 0.1 * (productsIndex + 1);
              return (
                <TableRow
                  className="
                  sm:hover:bg-transparent sm:dark:hover:bg-transparent
                  lg:hover:bg-[#f5f5f5] lg:dark:hover:bg-[#3c3c3c]
                  dark:hover:text-white hover:text-black duration-300"
                  key={productsIndex}>
                  <TableCell className="font-medium px-4 py-3 border-[#3c3c3c]">
                    <Customtext delay={delay} text={Product.fields.product}/>
                  </TableCell>
                  <TableCell className="font-[300] px-4 py-3">
                    <Customtext delay={delay} text={Product.fields.specs} />
                  </TableCell>
                  <TableCell className=" flex flex-row gap-[3px] px-4 py-3">
                    <a href={Product.fields.link} className="underline">
                      <Customtext delay={delay} text={'Ürün'} />
                    </a>
                    <Customtext delay={delay} text={<ArrowUpRight size={15} />} />
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}