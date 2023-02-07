import { cache } from 'react';
import { sql } from './connect';

type Toy = {
  id: number;
  firstName: string;
  type: string;
  accessory: string | null;
};

// get all toys

export const getToys = cache(async () => {
  const toys = await sql<Toy[]>`
    SELECT * FROM toys
  `;

  return toys;
});

// get a single animal
export const getToyById = cache(async (id: number) => {
  const [toy] = await sql<Toy[]>`
    SELECT
      *
    FROM
      toys
    WHERE
      id = ${id}
  `;
  return toy;
});
