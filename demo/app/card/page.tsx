'use client';
import { Hits } from 'meilisearch';
import React from 'react'

type Person = {
  id: string;
  name: string;
  balance: string;
};
type Props = {
  people: Person[];
}

export const Card = ({people}: Props) => {
  return (
    <div>{
        people.map((p, index) => (
          <p key={index}>{p.name}</p>
        ))
      }</div>
  )
}
