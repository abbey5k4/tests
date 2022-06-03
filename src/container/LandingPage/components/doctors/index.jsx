import React from "react";
import styles from "./index.module.css";

export const DoctorsSection = () => {
  return (
    <div className="container-fluid">
      <div className={`${styles.dotorsWrapper} container`}>
        <div className="row">
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <div className={`${styles.imgHolderX}`}>
              <img src="/assets/doctorleft.svg" alt="doctor-left" />
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <div className={styles.imgHolder}>
              <img src="/assets/doctorright.svg" alt="doctor-right" />
            </div>
            <div className={styles.dockerrightContentRoot}>
              <p className={styles.dockerrightContent}>
                GryCare helps to bridge the gap between patients and medical
                providers by providing healthcare information exchange services.
                No more duplicated data, own your records, manage your records
                and watch it evolve.
              </p>

              <button className={styles.dockerrightContentButton}>
                <span>Get Started Today</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
