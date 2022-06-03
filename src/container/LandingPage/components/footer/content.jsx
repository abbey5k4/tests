import React from "react";
import styles from './index.module.css'

const FooterContent = () => {
  return (
    <div className={`${styles.contentRoot}`}>
      <h6 className={styles.contentHeaderTextRoot}>Office Address here</h6>

      <div className={styles.contentBodyRoot}>
        <p className={styles.contentBody1}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique
          eros cras nibh aenean sociis cursus sapien. Vitae pellentesque sed
          orci aliquet ac in quis enim, ut. Nisi, purus dictumst quisque morbi
          ultrices iaculis. Magna sit tempus ultrices faucibus id mus. Est ante
          blandit nibh id dui.
        </p>
        <p className={styles.contentBody2}>
          The content on this website does not constitute a complete description
          of grycare’s advisory services. By using this website, you accept our
          <span className={styles.contentBodyspan}> Terms of Use</span> and{" "}
          <span className={styles.contentBodyspan}> Privacy Policy.</span>
        </p>
      </div>
      <p className={styles.contentBody2}>© 2022 GryCare. All rights reserved</p>
    </div>
  );
};

export default FooterContent;
