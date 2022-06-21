import { Card, Col, Row } from "react-bootstrap";
import styles from "../styles/Works.module.css";

export default function Works() {
  return (
    <div className={styles.works}>
      <h2>Projects - Areas of Interest</h2>
      <img src="/assets/svg/line.svg" className="line" />
      <Row>
        <Col md={6}>
          <Card className={styles.card}>
            <a href="https://johnsontemidev.blogspot.com/2022/06/builddeployexportuserdesignlibrary.html" target="_blank" rel="noreferrer">
              <Card.Img
                variant="top"
                src="/assets/images/works/codedesign.png"
              />
              <Card.Body>
                <Card.Title className={styles.title}>Build-Deploy-Export</Card.Title>
                <p className={styles.category}>Blog</p>
                <Card.Text>
                  Currently developing an interest in a technology blog mainly dealing with the latest trends in
                  Full-stack web and mobile app development.
                </Card.Text>
                <Card.Text>
                  Topics include React.js, Next.js, Express.js, MongoDB, and
                  more...
                </Card.Text>
              </Card.Body>
            </a>
          </Card>
        </Col>
        <Col md={6}>
          <Card className={styles.card}>
            <a
              href="https://johnsontemidev.blogspot.com/2022/06/blog-post_75.html"
              target="_blank"
              rel="noreferrer"
            >
              <Card.Img
                variant="top"
                src="/assets/images/works/param.png"
              />
              <Card.Body>
                <Card.Title className={styles.title}>Hukel App</Card.Title>
                <p className={styles.category}>Android App</p>
                <Card.Text>
                  An innovation intended to provide instant access to services and
                  notifications for people living in remote areas
                </Card.Text>
                <Card.Text>
                  The app is hoping to cater for a local language.
                </Card.Text>
              </Card.Body>
            </a>
          </Card>
        </Col>
        <Col md={6}>
          <Card className={styles.card}>
            <a href="https://johnsontemidev.blogspot.com/2022/06/projectgamersdarkstyle-kuttyapp-url.html" target="_blank" rel="noreferrer">
              <Card.Img variant="top" src="/assets/images/works/kuty.png" />
              <Card.Body>
                <Card.Title className={styles.title}>Kutty</Card.Title>
                <p className={styles.category}>URL Shortener</p>
                <Card.Text>
                  Kuty.me has really helped 
                  to shorten any lengthy URL in just one click.
                </Card.Text>
                <Card.Text>
                  Other tools in Kutty.me can serve as Whatsapp link generator and Quiz
                  maker
                </Card.Text>
              </Card.Body>
            </a>
          </Card>
        </Col>
        <Col md={6}>
          <Card className={styles.card}>
            <a href="https://menu.com" target="_blank" rel="noreferrer">
              <Card.Img
                variant="top"
                src="/assets/images/works/menu.jpg"
              />
              <Card.Body>
                <Card.Title className={styles.title}>RosyMenu</Card.Title>
                <p className={styles.category}>
                  Virtual menu card for Restaurants and home bakers
                </p>
                <Card.Text>
                  Virtual menu cards are easy to maintain and update. It can
                  also provide the minute details of each item in a restaurant.
                </Card.Text>
                <Card.Text>
                  Tools used: Next.js, Recoil, Express.js, MongoDB, Cloudinary,
                  Digitalocean, Vercel.
                </Card.Text>
              </Card.Body>
            </a>
          </Card>
        </Col>
      </Row>
    </div>
  );
}