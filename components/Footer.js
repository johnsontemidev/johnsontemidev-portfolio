import styles from "../styles/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className="social-accounts">
          <ul className="list-inline">
            <li className="list-inline-item">
              <a
                href="https://www.linkedin.com/in/johnson-temilola-adebowale-73aa5a88/"
                target="_blank"
                rel="noreferrer"
                className="btn-sm btn-default btn-lg"
              >
                <i class="bi bi-linkedin"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a
                href="https://twitter.com/johnsontemidev"
                target="_blank"
                rel="noreferrer"
                className="btn-sm btn-default btn-lg"
              >
                <i class="bi bi-twitter"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a
                href="https://www.github.com/johnsontemidev"
                target="_blank"
                rel="noreferrer"
                className="btn-sm btn-default btn-lg"
              >
                <i class="bi bi-github"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="copyright">
          <p className="top">
            Made with the Moment of Inspiratation | Powered by&jtemidev;
            <a href="https://">johnsontemiv.blogspot.com</a>
          </p>
          <p className="bottom">
            Copyright © <a href="https://">johnsontemidev.blogspot.com</a> 2022
          </p>
        </div>
      </div>
    </footer>
  );
}