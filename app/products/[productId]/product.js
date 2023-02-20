'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
// import { totalNumberOfProducts } from '../../../components/_app';
import { getParsedCookie, setStringifiedCookie } from '../../../utilis/cookies';
import styles from './singleProduct.module.scss';

export default function Product(props) {
  const [count, setCount] = useState(1);
  const router = useRouter();

  return (
    <div>
      <button
        className={styles.buttonsStyle}
        onClick={() => {
          if (count <= 1) {
            setCount(1);
          } else {
            setCount(count - 1);
          }
        }}
      >
        -
      </button>
      <input
        data-test-id="product-quantity"
        readOnly
        value={count}
        className={styles.inputStyle}
      />
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +
      </button>
      <br />
      <button
        data-test-id="product-add-to-cart"
        onClick={() => {
          const productsInCookies = getParsedCookie('cart');
          if (!productsInCookies) {
            setStringifiedCookie('cart', [
              { id: props.toy.id, quantity: count },
            ]);

            return;
          }
          const foundProduct = productsInCookies.find((productInCookie) => {
            return productInCookie.id === props.toy.id;
          });
          if (foundProduct) {
            foundProduct.quantity += count;
          } else {
            productsInCookies.push({ id: props.toy.id, quantity: count });
          }

          setStringifiedCookie('cart', productsInCookies);
          setCount(1);
          router.refresh();
        }}
      >
        ADD TO CART
      </button>
      <br />
      <div>
        {/* <Link href="/cart" className={styles.linksStyle}>
        Review your cart
      </Link>
      <Link href="/products" className={styles.linksStyle}>
        Go to all products
      </Link> */}
      </div>
    </div>
  );
}
