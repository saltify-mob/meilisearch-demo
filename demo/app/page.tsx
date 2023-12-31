"use client";
import Image from "next/image";
import { Hits, MeiliSearch } from "meilisearch";
import { SetStateAction, use, useEffect, useState } from "react";
import { Card } from "./card/page";

export default function Home() {
  const [search, setSearch] = useState("");
  const [people, setPeople] = useState<Hits<Record<string, any>>>([]);

  const client = new MeiliSearch({
    host: "https://ms-23da8d068b58-6238.lon.meilisearch.io",
    apiKey: "67259f4c8103fce551aacb916f40a9acf41ae6cd",
  });

  useEffect(() => {
    client
      .index("people")
      .search(search)
      .then((res) => {
        const people = res.hits;
        setPeople(people);
      });
  }, [search]);

  const handleSearchChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setSearch(event.target.value);
  };

  return (
    <main className="flex justify-center">
      <div className="border-2 border-black w-96 px-24 py-8 rounded-md bg-white">
        <h1 className="text-xl font-bold">Find the person!</h1>
        <form className="mb-6">
          <input onChange={handleSearchChange} name="query" />
        </form>
        <Card people={people} />
      </div>
    </main>
  );
}
