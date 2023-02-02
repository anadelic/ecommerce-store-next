import Image from 'next/image';
import Link from 'next/link';
import { toys } from '../../database/toys';
import styles from './product.module.scss';

function ProductsPage() {
  return (
    <main className={styles.main}>
      <h1>All Products</h1>
      <div>
        {toys.map((toy) => {
          return (
            <div key={toy.id}>
              <h2>{toy.type}</h2>
              <Link
                data-test-id="product-toy.id"
                href={`/toys/${toy.type.toLocaleLowerCase()}`}
              />
              <Link href={`/toys/${toy.type.toLocaleLowerCase()}`}>
                <Image
                  src={`/images/${toy.type}-${toy.id}.jpg`}
                  alt={toys.type}
                  width="300"
                  height="300"
                />
              </Link>

              <image
                href="/images/blocks.webp"
                alt="blocks"
                width="200"
                height="200"
              />
            </div>
          );
        })}
      </div>
    </main>
  );
}

export default ProductsPage;
