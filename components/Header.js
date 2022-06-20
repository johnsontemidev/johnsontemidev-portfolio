// components/Header.js

import styles from "../styles/Header.module.css";

export default function Header() {
  return (
    <main className={styles.header}>
      <img src="/assets/images/profile.png" className={styles.dp} />

      <h1 className={styles.name}>Temilola Johnson</h1>

      <p className={styles.about}>
        Software Engineer | Reactjs Developer,
        <br />
        Aspiring & Innovative {" "}
        <a href="https://" target="_blank" rel="noreferrer">
          Technologies
        </a>
      </p>
    </main>
  );
}