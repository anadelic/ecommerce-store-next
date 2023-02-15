import { cookies } from 'next/headers';
import Image from 'next/image';
import Link from 'next/link';
import { getToys } from '../../database/toys';
import { GetRemoveButton } from '../../utilis/getButtons';
import styles from './page.module.scss';

export const metadata = {
  title: 'Cart | Smallkind',
  description: 'Review your purchases and complete your transaction',
};
export default async function cartPage() {
  // Get toys from database
  const toys = await getToys();
  // Get cookies
  const productsCookie = cookies().get('cart');

  let productsCookieParsed = [];

  if (productsCookie) {
    productsCookieParsed = JSON.parse(productsCookie.value);
  }
  // adding qty to toys array
  const productsWithQuantity = toys.map((toy) => {
    const productWithQuantity = { ...toy, quantity: 0 };

    // Read the cookie and commparing the ids with toy's id
    const productInCookie = productsCookieParsed.find(
      (productObject) => toy.id === productObject.id,
    );

    // if product is found the quantity gets updated
    if (productInCookie) {
      productWithQuantity.quantity = productInCookie.quantity;
    }
    return productWithQuantity;
  });

  // Calculate the total sum of price with reduce method
  const totalPrice = productsWithQuantity.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  // Render only products with quantity to cart list
  const cartList = productsWithQuantity.filter(
    (product) => product.quantity > 0,
  );

  return (
    <main className={styles.main}>
      <h1>CART</h1>
      <hr className={styles.lineBreak} />
      {cartList.map((toy) => {
        return (
          <div key={toy.id} className={styles.productsLayout}>
            <Image
              className={styles.imagesLayout}
              src={`/images/${toy.id}.jpg`}
              alt={toy.toyName}
              width="300"
              height="250"
            />
            <span>
              <p>Quantity: {toy.quantity} </p>
              <p>{toy.price}</p>
              <div className={styles.button}>
                <GetRemoveButton toy={toy} />
              </div>
            </span>
          </div>
        );
      })}
      <br />
      <div className={styles.checkoutLayout}>
        <p>Total: {totalPrice.toFixed(2)}</p>
        <hr className={styles.lineBreak} />
        <div>
          <Link href="/checkout">
            <button>Checkout</button>
          </Link>
        </div>
      </div>
    </main>
  );
}
