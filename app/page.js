import { Inter } from '@next/font/google';
import Image from 'next/image';
import styles from './page.module.scss';

export default function Home() {
  return (
    <main>
      <h1>
        FÜR <br /> GROSS UND KLEIN
      </h1>
      <div>
        <Image
          className={styles.image}
          src="/images/mainfoto.jpg"
          alt="mainphoto"
          width="500"
          height="350"
        />
      </div>
    </main>
  );
}
