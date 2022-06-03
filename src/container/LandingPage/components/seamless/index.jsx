import React from "react";
import styles from "./index.module.css";

export const SeamlesslySection = () => {
  return (
    <div className="container-fluid">
      <div className={`${styles.seamlesslyRoot} container`}>
        <div className="row">
          <div className="col-xl-5 col-lg-5 col-md-5 col-sm-12 col-xs-12">
            <div className={styles.seamlesslyLeft}>
              <div className={styles.seamlesslyLeftContentRoot}>
                <h3 className={styles.seamlesslyLeftText}>
                  Seamlessly exchange
                  <span className={styles.seamlesslyLeftSpan}>
                    {" "}
                    medical information
                  </span>
                </h3>
                <p className={styles.seamlessP}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Imperdiet purus purus dolor eu odio arcu, lacus. Facilisis sed
                  placerat neque, et, nulla. Volutpat, porta lectus nunc orci.
                  Tempus a aliquam blandit lacus lacus tellus scelerisque.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
