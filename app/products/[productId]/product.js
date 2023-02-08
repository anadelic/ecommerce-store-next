'use client';
import Image from 'next/image';
import { useState } from 'react';
import { getParsedCookie, setStringifiedCookie } from '../../../utilis/cookies';

export default function Product(props) {
  const [qty, setQty] = useState(1);
  console.log(props.toy);

  return (
    <>
      <Image
        src={`/images/${props.toy.id}.jpg`}
        alt={props.toy.toyName}
        width="300"
        height="300"
      />
      <label htmlFor="quantity">Quantity: </label>
      <input
        type="number"
        id="qy"
        name="qy"
        min="1"
        max="10"
        value={qty}
        onChange={(e) => setQty(e.currentTarget.value)}
      />

      <button
        onClick={() => {
          // get the cookie
          const productsInCookies = getParsedCookie('productsCookie');

          // if there is no cookie I create a cookie and set to value of the input qty
          if (!productsInCookies) {
            setStringifiedCookie('productsCookie', [
              { id: props.product, quantity: qty },
            ]);
            // if there is no cookie function stop here
            return;
          }

          // if cookie exists check if the product is in this cookie
          const foundProduct = productsInCookies.find((productInCookie) => {
            return productInCookie.id === props.product.id;
          });

          // product is inside of the cookie
          if (foundProduct) {
            // Add a start to the foundFruit
            foundProduct.quantity = Number(foundProduct.quantity) + Number(qty);
            // my fruit is not inside of the cookie
          } else {
            // Add a the fruit to the array of fruits in cookies
            productsInCookies.push({ id: props.product.id, quantity: qty });
          }

          // Update the cookie after transformation
          setStringifiedCookie('productsCookie', productsInCookies);
        }}
      >
        Add to Cart
      </button>
    </>
  );
}
