import { cookies } from 'next/headers';

export default function GetTotal() {
  const getProductsCookie = cookies().get('cart');

  let productsParsed = [];

  if (getProductsCookie) {
    productsParsed = JSON.parse(getProductsCookie.value);
  }
  const total = productsParsed.reduce(
    (accu, item) => accu + parseInt(item.quantity),
    0,
  );

  return total;
}
