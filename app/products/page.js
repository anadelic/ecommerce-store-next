import { cookies } from 'next/headers';
import Image from 'next/image';
import Link from 'next/link';
import { getToys } from '../../database/toys';
import styles from './product.module.scss';

export default async function ProductsPage() {
  const toys = await getToys();

  const getProductsCookie = cookies().get('cart');

  let productsParsed = [];

  if (getProductsCookie) {
    productsParsed = JSON.parse(getProductsCookie.value);
  }

  const productsWithCount = toys.map((toy) => {
    const productWithCount = { ...toy, quantity: 0 };

    const productInCookie = productsParsed.find(
      (toyObject) => toy.id === toyObject.id,
    );

    if (productInCookie) {
      productWithCount.quantity = productInCookie.quantity;
    }

    return productWithCount;
  });

  return (
    <main className={styles.main}>
      {productsWithCount.map((toy) => {
        return (
          <div key={toy.id}>
            <p>num {toy.quantity}</p>
            <Link href={`/products/${toy.id}`}>
              <Image
                src={`/images/${toy.id}.jpg`}
                alt={toy.toyName}
                width="300"
                height="300"
              />
              <h2>{toy.toyName}</h2>
            </Link>
            <p>{toy.price}€</p>
          </div>
        );
      })}
    </main>
  );
}
