import './global.scss';
import Link from 'next/link';
import styles from './layout.module.scss';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        <header className={styles.header}>
          <div>
            <Link href="/">LOGO</Link>
          </div>
          <nav>
            <Link href="/">HOME</Link>
            <Link data-test-id="products-link" href="/products">
              ALL PRODUCTS
            </Link>
            <Link href="/">CART</Link>
          </nav>
        </header>
        {children}
        <footer>copyright store bla bla</footer>
      </body>
    </html>
  );
}
