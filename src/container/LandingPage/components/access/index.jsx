import React from "react";
import styles from "./index.module.css";

export const AccessToMedical = () => {
  return (
    <div className={`${styles.accessmedicalRoot} container-fluid mb-lg-3`}>
      <div className="container">
        <div className="row">
          <div className="col-xl-5 col-lg-4 col-md-4 col-sm-12 col-xs-12 mb-4">
            <h3 className={`${styles.accessmedicalHeading} mb-3`}>
              Access to medical information should never be a hassel
            </h3>
            <p className={`${styles.accessmedicalHeadingBody} mb-5`}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet
              purus purus dolor eu odio arcu, lacus.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-5 col-lg-4 col-md-4 col-sm-12 col-xs-12 mb-4">
            <div className={styles.accessmedicalContentRoot}>
              <img src="/assets/icon/polygon.svg" alt="polygon" />
              <div className={`${styles.accessmedicalContentHeader} ml-2`}>
                <h3 className={styles.accessmedicalContentHeaderText}>
                  No more duplication
                </h3>
                <p className={styles.accessmedicalContentBody}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Tempus, convallis erat placerat magna fermentum facilisi
                  sapien. Metus eu morbi euismod eu. Faucibus adipiscing
                  penatibus non neque.
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-5 col-lg-4 col-md-4 col-sm-12 col-xs-12 mb-4">
            <div className={styles.accessmedicalContentRoot}>
              <img src="/assets/icon/polygon.svg" alt="polygon" />
              <div className={`${styles.accessmedicalContentHeader} ml-2`}>
                <h3 className={styles.accessmedicalContentHeaderText}>
                  Authorize access to your data
                </h3>
                <p className={styles.accessmedicalContentBody}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Tempus, convallis erat placerat magna fermentum facilisi
                  sapien. Metus eu morbi euismod eu. Faucibus adipiscing
                  penatibus non neque.
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-5 col-lg-4 col-md-4 col-sm-12 col-xs-12 mb-2">
            <div className={styles.accessmedicalContentRoot}>
              <img src="/assets/icon/polygon.svg" alt="polygon" />
              <div className={`${styles.accessmedicalContentHeader} ml-2`}>
                <h3 className={styles.accessmedicalContentHeaderText}>
                  Access your data instantly
                </h3>
                <p className={styles.accessmedicalContentBody}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Tempus, convallis erat placerat magna fermentum facilisi
                  sapien. Metus eu morbi euismod eu. Faucibus adipiscing
                  penatibus non neque.
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-5 col-lg-4 col-md-4 col-sm-12 col-xs-12">
            <div className={styles.accessmedicalContentRoot}>
              <img src="/assets/icon/polygon.svg" alt="polygon" />
              <div className={`${styles.accessmedicalContentHeader} ml-2`}>
                <h3 className={styles.accessmedicalContentHeaderText}>
                  Your data, Your choice
                </h3>
                <p className={styles.accessmedicalContentBody}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Tempus, convallis erat placerat magna fermentum facilisi
                  sapien. Metus eu morbi euismod eu. Faucibus adipiscing
                  penatibus non neque.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
