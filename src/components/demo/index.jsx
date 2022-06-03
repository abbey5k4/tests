import React from "react";
import styles from "./index.module.css";

export const DemoComponent = () => {
  return (
    <div className="container-fluid">
      <div className={`${styles.demoBg} container text-center py-5 my-5`}>
        <h3 className={styles.simplifyLeftText}>
          Feel it's time to get started
        </h3>
        <p className={styles.demoParagraph}>
          Request a demo today to see how GryCare can be of help to you or your
          medical organization
        </p>
        <button className={styles.demoButton}>Request a demo</button>
      </div>
    </div>
  );
};
