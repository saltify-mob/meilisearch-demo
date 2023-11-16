'use client';
import React from 'react'

type Person = {
  id: string;
  name: string;
  balance: string;
};
type Props = {
  people: Person[]
}

export const Card = ({people}: Props) => {
  console.log(people);
  return (
    <div>{
        people.map((p, index) => (
          <>
          <p>{p.name}</p>
          <p>{p.balance}</p>
          </>
        ))
      }</div>
  )
}
