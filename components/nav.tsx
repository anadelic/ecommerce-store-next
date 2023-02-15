'use client';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
  children: number;
};

export default function Nav(props: Props) {
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
        <Link href="/cart" data-test-id="cart-link">
          <Image
            src="/images/shoppingcart.png"
            alt="shopping cart"
            width="33"
            height="33"
          />
          <span data-test-id="cart-count">{props.children}</span>
        </Link>
      </nav>
    </>
  );
}
