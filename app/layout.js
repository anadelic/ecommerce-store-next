import './global.scss';
import Nav from '../components/nav.tsx';
import GetTotal from '../utilis/getTotal';
import styles from './layout.module.scss';

export const metadata = {
  title: 'Smallkind',
  description:
    "As a family-run concept store, we attach great importance to sustainably manufactured children's clothing, toys and room interior.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className={styles.header}>
          <Nav>
            <GetTotal />
          </Nav>
        </header>
        {children}
        <footer className={styles.footer}>
          Copyright <span>Smallkind</span>
          {new Date().getFullYear()}
        </footer>
      </body>
    </html>
  );
}
