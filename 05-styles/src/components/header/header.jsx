import styles from "./header.module.css";
const Header = () => {
  return (
    <>
      <nav className={styles.nav}>
        <h1 className={styles.logo}>BraVior</h1>

        <ul>
          <li class="active">
            <a href="">First</a>
          </li>
          <li>
            <a href="">Second</a>
          </li>
          <li>
            <a href="">Third</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
