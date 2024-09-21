import { useRouter } from 'next/router';
import Layout from '@/components/layout';
import '@/styles/globals.css';
import styles from '@/styles/css.module.css'; 

function MyApp({ Component, pageProps }) {
  const { pathname } = useRouter();

  const pageClass = {
    '/': styles.homePage,
    '/projects': styles.projectsPage,
    '/photos': styles.photographsPage,
    '/bookmarks': styles.bookmarksPage,
  }[pathname] || '';

  return (
    <div className={pageClass}>
    <Layout>
        <Component {...pageProps} />
    </Layout>
    </div>
  );
}

export default MyApp;
