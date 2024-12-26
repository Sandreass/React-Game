import React from "react";
import styles from "./HomePage.module.css";

const HomePage: React.FC = () => {
  return (
    <div className={styles.homepage}>
      <div className={styles.content}>
        <h1>Welcome to Game World</h1>
        <p className={styles.searchtext}>
          Lorem ipsum dolor sit adipisicing elit. Veniam enim
          saepe nemo, exercitationem teneturipsam obcaecati soluta!
        </p>
        <form className={styles.search}>
          <input type="text" placeholder="Search for games..." />
          <div className={styles.radio}>
            <input type="radio" name="gameType" id="buy" defaultChecked />
            <label htmlFor="buy">Buy</label>
            <input type="radio" name="gameType" id="demo" />
            <label htmlFor="demo">Demo</label>
            <button type="submit">Go</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default HomePage;