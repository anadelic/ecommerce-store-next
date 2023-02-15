'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { getParsedCookie, setStringifiedCookie } from './cookies';

type Props = {
  toy: {
    id: number;
  };
};

type Product = {
  id: number;
};
export function GetRemoveButton(props: Props) {
  const router = useRouter();
  return (
    <button
      data-test-id={`cart-product-remove-${props.toy.id}`}
      onClick={() => {
        const currentCookieValue = getParsedCookie('cart');
        const newList = currentCookieValue.filter(
          (product: Product) => product.id !== props.toy.id,
        );
        console.log(newList);
        setStringifiedCookie('cart', newList);
        router.refresh();
      }}
    >
      Remove
    </button>
  );
}

export function GetCheckoutButton() {
  return (
    <Link href="/checkout/">
      <button>Checkout</button>
    </Link>
  );
}
