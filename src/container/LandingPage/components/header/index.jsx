import React from "react";
import styles from "./index.module.css";

export const HeaderComponent = () => {
  return (
    <div className={`${styles.background} container-fluid pt-4`}>
      <div className={`${styles.doctorleftroot} container`}>
        <div className="row">
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <div className={styles.doctorleftbody}>
              <h3 className={styles.doctorleftText}>
                Medical care simplified
                <span className={styles.doctorleftSpan}> for everyone</span>
              </h3>

              <p className={`${styles.doctorleftContent} pt-2`}>
                GryCare helps to bridge the gap between patients and medical
                providers by providing healthcare information exchange services.
                No more duplicated data, own your records, manage your records
                and watch it evolve.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
