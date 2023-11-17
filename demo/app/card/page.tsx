"use client";
import { Hits } from "meilisearch";
import React from "react";

type Props = {
  people: Hits<Record<string, any>>;
};

export const Card = ({ people }: Props) => {
  return (
    <div>
      {people.map((p, index) => (
        <p key={index}>{p.name}</p>
      ))}
    </div>
  );
};
