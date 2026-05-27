import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import podcastLogo from "../assets/podcast.svg";
import brand from "../assets/brand.svg";
import Toggle from "./Toggle";

export default function Header() {
  return (
    <header className={styles.appHeader}>
      {/* LEFT SIDE */}
      <Link to="/" className={styles.brandContainer}>
        <h1 className={styles.title}>
          <img src={podcastLogo} alt="Podcast Logo" className={styles.logo} />
          Podcast App
        </h1>
      </Link>

      {/* RIGHT SIDE */}
      <div className={styles.rightSection}>
        <Toggle />
        <img src={brand} alt="Brand" className={styles.brand} />
      </div>
    </header>
  );
}
