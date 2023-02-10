import './global.scss';
import GetTotal from '../components/getTotal';
import Nav from '../components/nav.js';
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
        <footer>
          Copyright <span>Smallkind</span>
          {new Date().getFullYear()}
        </footer>
      </body>
    </html>
  );
}
