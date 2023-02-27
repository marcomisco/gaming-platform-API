import { useEffect, useRef, useState } from 'react';
import { Header } from '../components/Header/Header';
import { Pagination } from '../components/Utilities/Pagination';
import { debounce } from '../components/Constants/debounce';
import { Games } from '../components/Games';
import { Controls } from '../components/Action/Controls';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { API_URL, initialFilters, KEY_URL } from '../components/Constants/constants';
import { Loader } from '../components/Utilities/Loader';
import { useRouteLoading } from '../hooks/useRouteLoading';

export default function Home({ initial }) {
  const router = useRouter();
  const { query } = router;
// filter
  const [filters, setFilters] = useState({
    page: query.page || initialFilters.page,
    search: query.search || initialFilters.search,
    ordering: query.ordering || initialFilters.ordering,
  });

  const [games, setGames] = useState(initial);
  const isMountRef = useRef(true);
  const isLoading = useRouteLoading();

  useEffect(() => {
    setGames(initial);
  }, [initial]);

  useEffect(() => {
    if (isMountRef.current) {
      isMountRef.current = false;
      return;
    }

    router.push({
      pathname: router.pathname,
      query: filters,
    });
  }, [filters]);

  return (
    <>
      <div className="container">
        <Head>
          <title>List of Video Games</title>
        </Head>
        <Header setFilters={debounce(setFilters, 500)} />
        <Controls filters={filters} setFilters={setFilters} />

{/* initialize loading */}
        {isLoading ? (
        <Loader />
      ) : (
        <Games games={games} setGames={setGames} />
      )}

      </div>
      <Pagination
        next={games.next}
        previous={games.previous}
        filters={filters}
        setFilters={setFilters}
      />
    </>
  );
}

export async function getServerSideProps({ query: initialQuery }) {
  try {
  const query = Object.entries(initialQuery).reduce((prev, [key, value]) => {
    return prev + `&${key}=${value}`;
  }, '');

  const response = await fetch(`${API_URL}${KEY_URL}${query}`);
  const initial = await response.json();

  return {
    props: { initial },
  };}
  catch  {
    console.log(error);
  }
}