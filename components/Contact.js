import { Row, Col } from "react-bootstrap";
import styles from "../styles/Contact.module.css";

export default function Contact() {
  return (
    <div className={styles.contact}>
      <h2>Contact</h2>
      <img src="/assets/svg/line.svg" className="line" />
      <Row className={styles.boxes}>
        <Col lg={4} md={6} sm={12}>
          <a
            href="mailto:johnsontemidev@gmail.com"
            target="_blank"
            rel="noreferrer"
            className={styles.box}
          >
            <i className="bi bi-envelope"></i>
            johnsontemidev@gmail
          </a>
        </Col>
        <Col lg={4} md={6} sm={12}>
          <a
            href="https://kuty.me/johnsontemidev"
            target="_blank"
            rel="noreferrer"
            className={styles.box}
          >
            <i className="bi bi-whatsapp"></i>
            Message
          </a>
        </Col>
        <Col lg={4} md={6} sm={12}>
          <a
            href="tel:+3083835045"
            target="_blank"
            rel="noreferrer"
            className={styles.box}
          >
            <i className="bi bi-telephone"></i>
            +27-3083835045
          </a>
        </Col>
      </Row>
    </div>
  );
}