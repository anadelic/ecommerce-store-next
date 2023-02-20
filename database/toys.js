import { cache } from 'react';
import { sql } from './connect';

// get all toys
export const getToys = cache(async () => {
  const toys = await sql`
    SELECT * FROM toys
  `;

  return toys;
});

// get a single toy
export const getToyById = cache(async (id) => {
  const [toy] = await sql`
    SELECT
      *
    FROM
      toys
    WHERE
      id = ${id}
      `;

  return toy;
});
