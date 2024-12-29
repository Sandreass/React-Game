import React from "react";
import styles from "./AboutPage.module.css";

const AboutPage: React.FC = () => {
  return (
    <div className={styles.aboutPage}>
      <h1 className={styles.h1}>About Us</h1>
      <br/>
      <div className={styles.content}>
      <h2 className={styles.h2}>Welcome to our gaming website!</h2>

        <p className={styles.p}>
          Here, anyone can buy games, explore demo versions of all games, and even play some games directly on our platform.
      
          We have been in the market for over 20 years and collaborate with all major game producers. Our goal is to bring the best gaming experience to you!
        </p>
      </div>
    </div>
  );
};

export default AboutPage;