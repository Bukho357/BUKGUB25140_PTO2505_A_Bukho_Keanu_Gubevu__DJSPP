import { useEffect } from "react";
import styles from "./Toggle.module.css";
import useLocalStorage from "use-local-storage";

export default function Toggle() {
  const [darkMode, setDarkMode] = useLocalStorage("darkMode", false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  return (
    <button className={styles.toggleBtn} onClick={() => setDarkMode(!darkMode)}>
      {darkMode ? "☀️" : "🌙"}
    </button>
  );
}
