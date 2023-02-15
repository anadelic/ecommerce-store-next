import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.scss';

export default function Home() {
  return (
    <main>
      <section className={styles.mainImage}>
        <h1>
          FÜR <br /> GROSS UND KLEIN
        </h1>
        <Image
          className={styles.image}
          src="/images/main.jpg"
          alt="mainphoto"
          width="700"
          height="500"
        />
      </section>
      <section className={styles.newIn}>
        <h2 className={styles.h2}>New In</h2>
        <Image
          className={styles.otherImages}
          src="/images/newin.jpg"
          alt="new in"
          width="500"
          height="650"
        />
      </section>
      <section className={styles.winterSale}>
        <a style={{ textDecoration: 'none' }} href="/products">
          <h2>Winter-Sale</h2>
        </a>
        <Image
          className={styles.otherImages}
          src="/images/wintersale.jpg"
          alt="winter sale"
          width="500"
          height="650"
        />
      </section>
      <section className={styles.boboChoses}>
        <h2>Bobo Choses</h2>
        <Image
          className={styles.otherImages}
          src="/images/bobochoses.jpg"
          alt="bobo choses brand"
          width="500"
          height="650"
        />
      </section>
    </main>
  );
}
