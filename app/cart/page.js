import { cookies } from 'next/headers';
import Image from 'next/image';
import Link from 'next/link';
import { getToys } from '../../database/toys';
import { Total } from '../../utilis/cookies';
import { GetDeleteAllButton, GetRemoveButton } from '../../utilis/getButtons';
import styles from './page.module.scss';

export const metadata = {
  title: 'Cart | Smallkind',
  description: 'Review your purchases and complete your transaction',
};
export default async function CartPage() {
  // Get toys from database
  console.log('click1');
  const toys = await getToys();
  console.log('click2');

  // Get cookies
  const productsCookie = cookies().get('cart');

  let productsCookieParsed = [];

  if (productsCookie) {
    productsCookieParsed = JSON.parse(productsCookie.value);
  }
  // adding qty to toys
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

  // Calculate the total sum of price with imported reduce method
  const totalPrice = Total(productsWithQuantity);

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
            <div data-test-id={`cart-product-${toy.id}`}>
              <Image
                className={styles.imagesLayout}
                src={`/images/${toy.id}.jpg`}
                alt={toy.toyName}
                width="300"
                height="250"
              />
              <span>
                <p>{toy.toyName}</p>
                <p>{toy.price}</p>
                <p data-test-id={`cart-product-quantity-${toy.id}`}>
                  {toy.quantity}
                </p>
                <div className={styles.button}>
                  <GetRemoveButton toy={toy} />
                </div>
              </span>
            </div>
          </div>
        );
      })}
      <br />
      <div className={styles.checkoutLayout}>
        <p data-test-id="cart-total">Total: {totalPrice.toFixed(2)}</p>
        <hr className={styles.lineBreak} />
        <div>
          <Link href="/checkout">
            <button data-test-id="cart-checkout">Checkout</button>
          </Link>
          <GetDeleteAllButton />
        </div>
      </div>
    </main>
  );
}
