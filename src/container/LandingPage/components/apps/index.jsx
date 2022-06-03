import React from "react";
import styles from "./index.module.css";

export const AppsSection = () => {
  return (
    <div className="container-fluid">
      <div className="container py-4">
        <div className="row align-items-center">
          <div className="col-xl-6 col-lg-4 col-md-6 col-sm-12 col-xs-12">
            <div className={`${styles.imgHoderx} py-5`}>
              <img src="/assets/PhoneMd.png" alt="" className="appimg" />
            </div>
          </div>
          <div className="col-xl-6 col-lg-4 col-md-6 col-sm-12 col-xs-12">
            <div className={styles.appsLayout}>
              <h3 className={styles.simplifyLeftText}>
                You are in control of
                <span className={styles.simplifyLeftSpan}>
                  &nbsp; your medical data
                </span>
              </h3>
              <p className={`${styles.appContent} pb-3 pt-3`}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Imperdiet purus purus dolor eu odio arcu, lacus. Tempus a
                aliquam blandit lacus lacus tellus scelerisque.
              </p>

              <div className={styles.appdownload}>
                <img src="/assets/appstore.svg" alt="appstore" />
                <img src="/assets/playstore.svg" alt="appstore" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
