import Head from "next/head";
import { Card } from "react-bootstrap";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Experience from "../components/Experience";
import Education from "../components/Education";
import Works from "../components/Works";
import Contact from "../components/Contact";
import About from "../components/About";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>
          Temilola - Software Engineer at Technologies, 
          • Next.js • React.js • Express.js • MongoDB
        </title>
        <meta
          name="description"
          content="
          Temilola Johnson - A Software Engineer & Innovative Entrepreneur. He is the Founder & CEO
        at Technologies."
        />
        <meta name="theme-color" content="#ffffff" />

        <meta name="og:type" content="website" />
        <meta
          name="og:title"
          content="
          Temilola Johnson - Software Engineer | Innovative Entrepreneur
          • Next.js • React.js • Express.js • MongoDB"
        />
        <meta
          name="keywords"
          content="syam,lal,cm,syamlal,syamlal cm,software engineer, internet entrepreneur"
        />
        <meta name="og:url" content="https://johnsontemidev.com" />
        <meta
          name="og:description"
          content="
          Temilola Johnson - Software Engineer & Innovative Entrepreneur. He is the Founder & CEO
        at Technologies."
        />
        <meta name="og:image" content="/assets/images/syamlal-og.jpg" />

        <link rel="icon" href="/favicon.ico" />

        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Card className={styles.card}>
        <Card.Body>
          <Header />
          <About />
          <Experience />
          <Education />
          <Works />
          <Contact />
          <Footer />
        </Card.Body>
      </Card>
    </div>
  );
}