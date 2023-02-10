'use client';
import Image from 'next/image';
import { useState } from 'react';
// import { totalNumberOfProducts } from '../../../components/_app';
import { getParsedCookie, setStringifiedCookie } from '../../../utilis/cookies';

export default function Product(props) {
  const [qty, setQty] = useState(1);

  return (
    <>
      <Image
        src={`/images/${props.toy.id}.jpg`}
        alt="here is a picture of a toy"
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
          const productsInCookies = getParsedCookie('cart');

          // if there is no cookie I create a cookie and set to value of the input qty
          if (!productsInCookies) {
            setStringifiedCookie('cart', [{ id: props.toy.id, quantity: 1 }]);
            window.location.reload(true);
            // if there is no cookie function stop here
            return;
          }

          // if cookie exists check if the product is in this cookie
          const foundProduct = productsInCookies.find((productInCookie) => {
            return productInCookie.id === props.toy.id;
          });

          // product is inside of the cookie
          if (foundProduct) {
            foundProduct.quantity = Number(foundProduct.quantity) + Number(qty);
          } else {
            productsInCookies.push({ id: props.toy.id, quantity: qty });
          }

          // Update the cookie after transformation
          setStringifiedCookie('cart', productsInCookies);

          window.location.reload(true);
        }}
      >
        Add to Cart
      </button>
      <p>{props.toy.toyDescription}</p>
      <p>{props.toy.price}</p>
    </>
  );
}
