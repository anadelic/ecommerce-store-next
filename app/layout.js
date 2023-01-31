import './global.scss';
import Link from 'next/link';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        <header>
          <nav>
            <div>
              <Link href="/">LOGO</Link>
            </div>
            <div>
              <Link href="/">HOME</Link>
              <Link href="/">PRODUCTS</Link>
              <Link href="/">CART</Link>
            </div>
          </nav>
        </header>
        {children}
        <footer>copyright store bla bla</footer>
      </body>
    </html>
  );
}
