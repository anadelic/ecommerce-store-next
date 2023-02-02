import Image from 'next/image';
import styles from './page.module.scss';

export default function Home() {
  return (
    <main>
      <section className={styles.main}>
        <h1 className={styles.h1}>
          FÜR <br /> GROSS UND KLEIN
        </h1>
        <Image
          className={styles.image}
          src="/images/mainfoto.jpg"
          alt="mainphoto"
          width="700"
          height="500"
        />
      </section>
      <section className={styles.newIn}>
        <h2 className={styles.h2}>New In</h2>
        <Image
          src="/images/newin.jpg"
          alt="stapelsteine"
          width="400"
          height="550"
        />
      </section>
    </main>
  );
}
