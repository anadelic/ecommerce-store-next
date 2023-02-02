import Image from 'next/image';
import Link from 'next/link';
import { toys } from '../../database/toys';
import styles from './product.module.scss';

export default function ProductsPage() {
  return (
    <main className={styles.main}>
      <h1>All Products</h1>
      <div>
        {toys.map((toy) => {
          return (
            <div key={toy.id}>
              <Link href={`/products/${toy.type.toLocaleLowerCase()}`}>
                <h2>{toy.type}</h2>
                <Image
                  src={`/images/${toy.type}-${toy.id}.jpg`}
                  alt={toy.type}
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
