import { cookies } from 'next/headers';
import Image from 'next/image';
import Link from 'next/link';
import { getToys } from '../../database/toys';
import styles from './product.module.scss';

export default async function ProductsPage() {
  const toys = await getToys();
  // get the cookies from the server
  const getProductsCookie = cookies().get('productsCookie');
  let productsParsed = [];

  if (getProductsCookie) {
    productsParsed = JSON.parse(getProductsCookie.value);
  }

  const productsWithCount = toys.map((toy) => {
    const productWithCount = { ...toy, quantity: 0 };

    // i read the cookie and find the fruit
    const productInCookie = productsParsed.find(
      (toyObject) => toy.id === toyObject.id,
    );

    // if find the fruit i update the amount of stars
    if (productInCookie) {
      productWithCount.quantity = productInCookie.quantity;
    }
    console.log(productWithCount);

    return productWithCount;
  });

  return (
    <main className={styles.main}>
      <h1>All Products</h1>

      <div>
        {productsWithCount.map((toy) => {
          return (
            <div key={toy.id}>
              <p>num {toy.quantity}</p>
              <Link href={`/products/${toy.name}`}>
                <h2>{toy.name}</h2>
                <Image
                  src={`/images/${toy.id}.jpg`}
                  alt={toy.name}
                  width="300"
                  height="300"
                />
              </Link>
            </div>
          );
        })}
      </div>
    </main>
  );
}
