
import styles from "../styles/Experience.module.css";

export default function Experience() {
  return (
    <div className={styles.experience}>
      <h1>Experience</h1>
      <img src="/assets/svg/line.svg" className="line" />
      <div className={styles.lineContainer}>
        <div className={styles.line}>
          <i class="bi bi-briefcase"></i>
          <div>
            <div className={styles.college}>
              <a href="https://" target="_blank" rel="noreferrer">
                JPMorgan Chase & Co
              </a>
            </div>
            <div className={styles.branch}>
              Software Engineer Virtual Internship (January 2022)
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}