'use client';
import Link from 'next/link';

export default function Nav({ children }) {
  return (
    <>
      <div>
        <Link href="/">LOGO</Link>
      </div>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/">About</Link>
        <Link data-test-id="products-link" href="/products">
          Shop all
        </Link>
        <Link href="/cart">Cart:{children} </Link>
      </nav>
    </>
  );
}
