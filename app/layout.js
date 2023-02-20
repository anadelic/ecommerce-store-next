import './global.scss';
import { cookies } from 'next/headers';
import Image from 'next/image';
import Link from 'next/link';
import { getToys } from '../database/toys';
import styles from './layout.module.scss';

export const metadata = {
  title: 'Smallkind',
  description:
    "As a family-run concept store, we attach great importance to sustainably manufactured children's clothing, toys and room interior.",
};

export const dynamic = 'force-dynamic';

export default async function RootLayout({ children }) {
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

  // Calculate the total qty with reduce method
  const total = productsWithQuantity.reduce(
    (accu, item) => accu + parseInt(item.quantity),
    0,
  );
  return (
    <html lang="en">
      <body>
        <header className={styles.header}>
          <div className={styles.logoStyle}>
            <p>SMALLKIND</p>
          </div>
          <nav className={styles.links}>
            <Link href="/">Home</Link>

            <Link href="/">About</Link>
            <Link data-test-id="products-link" href="/products">
              Shop all
            </Link>
            <Link href="/cart" data-test-id="cart-link">
              <Image
                src="/images/shoppingcart.png"
                alt="shopping cart"
                width="33"
                height="33"
              />
              <span data-test-id="cart-count">{total}</span>
            </Link>
          </nav>
        </header>
        {children}
        <footer className={styles.footer}>
          Copyright <span>Smallkind</span>
          {new Date().getFullYear()}
        </footer>
      </body>
    </html>
  );
}
