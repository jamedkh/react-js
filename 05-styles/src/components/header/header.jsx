import styles from "./header.module.css";
const Header = () => {
  return (
    <>
      <nav className={styles.nav}>
        <span>
          <img src="../../assets/react.svg" alt="logo" />
        </span>
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
