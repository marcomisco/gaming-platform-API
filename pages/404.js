import Link from 'next/link';
import Head from 'next/head';

export default function Error() {
  return (
    <>
      <Head>
        <title>Page Not Found</title>
      </Head>
      <Link href="/">
        <a>Go back home</a>
      </Link>
    </>
  );
}
