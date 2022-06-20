// components/About.js

import styles from "../styles/About.module.css";

export default function About() {
  return (
    <div className={styles.about}>
      <h2>About</h2>
      <img src="/assets/svg/line.svg" className="line" />
      <p>
        Hello! I'm Johnson TA, An Aspiring Software Engineer. I recently completed my BSc in Information Technology in 2021, 
        and a certificate programme in Software Engineering. 
        I'm so passionate about Tech, also a passionate learner who's always willing to solve problems, and work across technologies and domains. 
        I love to explore new technologies and leverage.  
      </p>
      <p> 
        I use my free time to guide and mentor upcoming students who are also passionate about Tech. 
        As an aspirign full-stack developer I have developed my knowledge woring with Next.js, React.js, React
        Native, Express.js and MongoDB. The dispensation of the Tech industry is ever-evolving and I love being able to grow with it, 
        while continually solidifying the fundamentals. This has led me to pursue the passion i have as a developer at {" "} <a href="https://sovtech.co.za" target="_blank" rel="noreferrer">SovTech - fast growing tech businesses</a>
      </p>
      <p>
        I would really love to be a developer at {" "}
        <a href="https://sovtech.co.za" target="_blank" rel="noreferrer">SovTech</a>  because it will be a great priviledge for anyone who's passionate about Technology to work and associate with a reputable company like SovTech. 
        I read about SovTech, and realized that I would be a great fit as a developer in the organization because I match the requirements needed to further develop my knowledge, 
        utilize my skills and further gain experience, while enhancing the producitivity of the organization{" "}
        
      </p>
    </div>
  );
}