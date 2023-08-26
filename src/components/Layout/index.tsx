import { FC, useState } from 'react';
import { NavLink, Outlet, useLocation} from 'react-router-dom';
import styles from './layout.module.css';
import logo from '../../assets/shared/logo.svg';
import hamburMenuIcon from '../../assets/shared/icon-hamburger.svg';
import menuCloseIcon from '../../assets/shared/icon-close.svg';

interface MainLayoutProps {
 redirectPath: string;
  
}

export const MainLayout: FC<MainLayoutProps> = (
  {redirectPath}
) => {

  const {pathname} = useLocation();
  console.log(pathname);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <main>
      <header className={styles.header} id='sidebar'>
        <div className={styles.logo}>
          <img src={logo} alt='' />
        </div>
        <hr className={styles.hr} />
        <nav className={styles.navbar}>
          <ul className={`${styles.nav} ${isMenuOpen ? styles.open : ''}`}>
            <li>
              <NavLink to='/' onClick={toggleMenu}>
                <span>00</span>Home
              </NavLink>
            </li>
            <li>
              <NavLink to={redirectPath} onClick={toggleMenu}>
                <span>01</span>Destination
              </NavLink>
            </li>
            <li>
              <NavLink to='/crew' onClick={toggleMenu}>
                <span>02</span>Crew
              </NavLink>
            </li>
            <li>
              <NavLink to='/technology' onClick={toggleMenu}>
                <span>03</span>Technology
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className={styles.hamburgerMenu} onClick={toggleMenu}>
          <img
            src={isMenuOpen ? menuCloseIcon : hamburMenuIcon}
            alt={isMenuOpen ? 'menu close' : 'menu open'}
          />
        </div>
      </header>
      <Outlet /> {/* Render nested routes */}
    </main>
  );
};
