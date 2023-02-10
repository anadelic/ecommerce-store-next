import { cookies } from 'next/headers';
import { context } from 'react';
import { getToys } from '../database/toys';
import { getParsedCookie, setStringifiedCookie } from './cookies';

export async function getCardItems(context) {
  const getProductsCookie = cookies().get('cart');
  const filteredCardList = [];
  const parsedCookies = JSON.parse(getProductsCookie.value);

  const toys = await getToys();
  parsedCookies.map((cookie) => {
    toys.find((toy) =>
      toy.id === cookie.id
        ? filteredCardList.push({
            id: toy.id,
            price: toy.price,
            quantity: cookie.quantity,
          })
        : null,
    );
    console.log(parsedCookies);
    return 1;
  });
  return filteredCardList;
}

// export function updateCartCookieQtyValue(item, qty) {
//   const currentCookieValue = getParsedCookie('cart');

//   const foundCookie = currentCookieValue.find(
//     (cookieBookObj) => cookieBookObj.id === item.id,
//   );
//   foundCookie.quantity = qty;
//   setStringifiedCookie('cart', currentCookieValue);
// }

// export function cartTotalCost(items, setTotalCost = () => {}) {
//   if (items.length === 0) {
//     return 0;
//   }
//   const totalCost = items.reduce(
//     (prev, curr) => prev + parseInt(curr.quantity) * parseFloat(curr.price),
//     0,
//   );
//   setTotalCost(totalCost.toFixed(2));
//   return totalCost.toFixed(2);
// }
