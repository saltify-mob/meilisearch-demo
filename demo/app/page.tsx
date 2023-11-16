'use client';
import Image from 'next/image';
import { MeiliSearch } from 'meilisearch';
import { use, useEffect, useState } from 'react';

type Person = {
  id: string;
  name: string;
  balance: string;
};

export default function Home() {
  const [search, setSearch] = useState('');
  const [people, setPeople] = useState<Person[]>([]);

  useEffect(() => {
    const client = new MeiliSearch({
      host: 'https://ms-23da8d068b58-6238.lon.meilisearch.io',
      apiKey: '67259f4c8103fce551aacb916f40a9acf41ae6cd',
    });
    client
      .index('people')
      .search()
      .then((res) => console.log(res));
  }, [search]);

  return (
    <main>
      <h1>Find the person!</h1>
      <form>
        <input name="query" />
        <button type="submit">Search</button>
      </form>
    </main>
  );
}
