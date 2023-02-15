import './global.scss';
import Nav from '../components/nav.tsx';
import GetTotal from '../utilis/getTotal';
import styles from './layout.module.scss';

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
