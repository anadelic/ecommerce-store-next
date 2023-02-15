const toys = [
  {
    id: 1,
    toy_name: 'Doll Iris Rosa',
    toy_description:
      'Doll "Iris Rose Multi Mix".Material: 100% organic cotton.Filling: recycled polyester.Height: 30 cm.Care instructions: Washable at 30 degrees. Do not iron, do not tumble dry, do not dry clean, do not bleach. The product is CE certified.',
    price: '31.00',
  },
  {
    id: 2,
    toy_name: 'Stacking blocks "Pixie / Dragon"',
    toy_description:
      'Stacking blocks "Nightfall". Material: sturdy cardboard. Size: 13.5 x 13.5 x 13.5 cm.Including 10 stacking blocks with illustrations and numbers from 1 to 10. Age recommendation: 1+. Design from Denmark. ',
    price: '30.00',
  },
  {
    id: 3,
    toy_name: 'Stapelstein "Rainbow Classic"',
    toy_description:
      'Stacking Stones "Rainbow Pastel Bundle. Age recommendation: from 12 months. Free from corners and edges. Also suitable for outdoor use. Material: 100% resource-saving EPP (expanded polypropylene) - fully recyclable. The product complies with the Toy Safety Directive 2009/48/EC. Country of manufacture: Germany',
    price: '175.00',
  },
  {
    id: 4,
    toy_name: 'Doll House Animals "Holdie Folk Dinosaurs"',
    toy_description:
      'Doll House Animals "Holdie Folk Dinosaurs" 3pcs - details. Material: wool and cotton. Size: 20 x 12 cm. Line: Holdie Folk. Handmade. Fits in small children hands',
    price: '29.90',
  },

  // {
  //   id: 5,
  //   toy_name: 'Animal Doll "Mrs. Elephant"',
  //   toy_description:
  //     'Material: 100% organic. Model: Mrs Elephant. Collection: Puppet World. Recommended age: From 0+ years.',
  //   price: '18',
  // },
];

export async function up(sql) {
  await sql`
    INSERT INTO toys ${sql(toys, 'toy_name', 'toy_description', 'price')}
  `;
}
export async function down(sql) {
  for (const toy of toys) {
    await sql`
      DELETE FROM
        toys
      WHERE
        id = ${toy.id}
    `;
  }
}
