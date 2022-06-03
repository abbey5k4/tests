import React from "react";
import styles from "./index.module.css";

export const Simplify = () => {
  return (
    <div className="container-fluid my-5">
      <div className={`${styles.simplifyRoots} container my-3`}>
        <div className="row align-items-center">
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <div className={styles.simplifyLeftContentRoot}>
              <h3 className={styles.simplifyLeftText}>
                Simplifying healthcare is
                <span className={styles.simplifyLeftSpan}> our business</span>
              </h3>

              <p className={`${styles.simplifyP} pt-3`}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Imperdiet purus purus dolor eu odio arcu, lacus. Facilisis sed
                placerat neque, et, nulla. Volutpat, porta lectus nunc orci.
                Tempus a aliquam blandit lacus lacus tellus scelerisque.
              </p>
            </div>

            <img
              src='/assets/techset.svg'
              style={{ width: "auto", height: "280px" }}
              alt="polygon"
              className={styles.imgD}
            />
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <div className={styles.simplifyRight}>
              <img src='/assets/doctorkid.png' alt="polygon" className={styles.simplifyRightImg} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
