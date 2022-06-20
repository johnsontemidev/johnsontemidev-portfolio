import styles from "../styles/Education.module.css";

export default function Education() {
  return (
    <div className={styles.education}>
      <h2>Education</h2>
      <img src="/assets/svg/line.svg" className="line" />
      <div className={styles.lineContainer}>
        <div className={styles.line}>
          <i className="bi bi-mortarboard"></i>
          <div>
            <div className={styles.college}>
              <a href="http://" target="_blank" rel="noreferrer">
                AIU University, Honolulu, HI, USA
              </a>
            </div>
            <div className={styles.branch}>
              Bachelor of Information Technology(BSc), Software Engineering 
              (June 2017- May 2021)
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}