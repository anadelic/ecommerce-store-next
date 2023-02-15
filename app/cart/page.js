import { cookies } from 'next/headers';
import Image from 'next/image';
import Link from 'next/link';
import { getToys } from '../../database/toys';
import { GetCheckoutButton, GetRemoveButton } from '../../utilis/getButtons';
import styles from './page.module.scss';

export const metadata = {
  title: 'Cart | Smallkind',
  description: 'Review your purchases and complete your transaction',
};

export default async function CartPage() {
  const getProductsCookie = cookies().get('cart');
  const cartList = [];
  let productsParsed = [];

  if (getProductsCookie) {
    productsParsed = JSON.parse(getProductsCookie.value);
  }

  // comaping what is in the cookies with the database and getting the cart list
  const toys = await getToys();
  productsParsed.map((cookie) => {
    toys.find((toy) =>
      toy.id === cookie.id
        ? cartList.push({
            id: toy.id,
            price: toy.price,
            quantity: cookie.quantity,
          })
        : null,
    );

    return cartList;
  });

  const totalPrice = cartList.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  return (
    <main className={styles.main}>
      <h1> Shopping Cart</h1>
      {cartList.length === 0 ? (
        <div>Cart is empty. </div>
      ) : (
        <div>
          {cartList.map((toy) => {
            return (
              <div key={toy.id}>
                <Image
                  src={`/images/${toy.id}.jpg`}
                  alt={toy.toyName}
                  width="300"
                  height="300"
                />

                <p>{toy.price}</p>
                <p>Quantity: {toy.quantity}</p>
                <GetRemoveButton toy={toy} />
              </div>
            );
          })}
          <p>Total: {totalPrice.toFixed(2)}</p>
          <GetCheckoutButton />
        </div>
      )}
    </main>
  );
}
