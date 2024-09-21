import styles from '@/styles/css.module.css';
import { getPhotos } from './api/api';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";

export async function getStaticProps() {
  const photo = await getPhotos()
  return {
  props: {photo},
  revalidate: 60, }
}

export default function Home({ photo }) {
  return (
    <div className={styles.productsGrid}>
      {photo.map((photo) => (
        <div key={photo.id} style={{ display: 'flex', justifyContent: 'center' }}>     
          <Dialog>
            <DialogTrigger style={{ display: 'flex', alignItems: 'end' }}>
              <img className={styles.images} style={{ objectFit: 'cover', aspectRatio: 1, borderRadius: 8 }}
                src={photo.urls.raw} />
            </DialogTrigger>
            <DialogContent style={{ display: 'flex', flexDirection: 'column' }}>
              <img style={{ objectFit: 'contain', aspectRatio: 1 }}
                src={photo.urls.raw} />
            </DialogContent>
          </Dialog>
        </div>
      ))}
      <footer className={styles.mobilefooter}></footer>
    </div>
  );
}
