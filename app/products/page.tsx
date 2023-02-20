// import { cookies } from 'next/headers';
import Image from 'next/image';
import Link from 'next/link';
import { getToys } from '../../database/toys';
import styles from './product.module.scss';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'Smallkind|Toys',
  description: 'Here you can find all our toys',
};

export default async function ProductsPage() {
  const toys = await getToys();

  // const getProductsCookie = cookies().get('cart');

  // const productsParsed = [];

  // if (getProductsCookie) {
  //   productsParsed = JSON.parse(getProductsCookie.value);
  // }

  // const productsWithCount = toys.map((toy) => {
  //   const productWithCount = { ...toy, quantity: 0 };

  //   const productInCookie = productsParsed.find(
  //     (toyObject) => toy.id === toyObject.id,
  //   );

  //   if (productInCookie) {
  //     productWithCount.quantity = productInCookie.quantity;
  //   }

  //   return productWithCount;
  // });

  return (
    <main className={styles.main}>
      <h1 className={styles.toyH1}>Toys</h1>
      <hr className={styles.lineBreak} />
      {toys.map((toy) => {
        return (
          <div key={`product-${toy.id}`}>
            <Link
              href={`/products/${toy.id}`}
              data-test-id={`product-${toy.id}`}
            >
              <Image
                className={styles.image}
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
