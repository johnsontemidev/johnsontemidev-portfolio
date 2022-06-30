// components/About.js

import styles from "../styles/About.module.css";

export default function About() {
  return (
    <div className={styles.about}>
      <h2>About</h2>
      <img src="/assets/svg/line.svg" className="line" />
      <p>
        Hello! I'm Johnson TA, An Aspiring Software Engineer. I completed my BSc in Information Technology, 
        and a certificate programme in Software Engineering. 
        I'm so passionate about Tech, also a passionate learner who's always willing to solve problems, and work across technologies and domains. 
        I love to explore new technologies and leverage.  
      </p>
      <p> 
        I use my free time to guide and mentor upcoming students who are also passionate about Tech. 
        As an aspirign full-stack developer I have developed my knowledge woring with Next.js, React.js, React
        Native, Express.js and MongoDB. The dispensation of the Tech industry is ever-evolving and I love being able to grow with it, 
        while continually solidifying the fundamentals.
      </p>
    </div>
  );
}
