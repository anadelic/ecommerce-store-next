import { Total } from '../cookies';

test('total sum in a cart', () => {
  const cookieValue = [
    {
      id: 1,
      toy_name: 'Doll Iris Rosa',
      toy_description:
        'Doll "Iris Rose Multi Mix".Material: 100% organic cotton.Filling: recycled polyester.Height: 30 cm.Care instructions: Washable at 30 degrees. Do not iron, do not tumble dry, do not dry clean, do not bleach. The product is CE certified.',
      price: '31.00',
      quantity: '1',
    },
    {
      id: 2,
      toy_name: 'Stacking blocks "Pixie / Dragon"',
      toy_description:
        'Stacking blocks "Nightfall". Material: sturdy cardboard. Size: 13.5 x 13.5 x 13.5 cm.Including 10 stacking blocks with illustrations and numbers from 1 to 10. Age recommendation: 1+. Design from Denmark. ',
      price: '30.00',
      quantity: '1',
    },
  ];

  const result = Total(cookieValue);
  expect(result).toEqual(61.0);
});
