import React from "react";
import FooterContent from "./content";
import styles from "./index.module.css";

export const Footer = () => {
  return (
    <div className=" container-fluid px-0">
      <div className="container pt-lg-5">
        <div className="row">
          <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-6">
            <div>
              <h3 className={styles.tabheaderText}>Company</h3>
            </div>
            <div>
              <p className={styles.tabListText}>About Us</p>
              <p className={styles.tabListText}>Careers</p>
              <p className={styles.tabListText}>Cookie Policy</p>
              <p className={styles.tabListText}>Terms of Use</p>
              <p className={styles.tabListText}>Privacy Policy</p>
              <p className={styles.tabListText}>Security</p>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-6">
            <div>
              <h3 className={styles.tabheaderText}>Our Solutions</h3>
            </div>
            <div>
              <p className={styles.tabListText}>Gry EMR</p>
              <p className={styles.tabListText}>GryCare Mobile App</p>
              <p className={styles.tabListText}>Gry Lookup</p>
              <p className={styles.tabListText}>Gry Marketplace</p>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-6">
            <div>
              <h3 className={styles.tabheaderText}>Resources</h3>
            </div>
            <div>
              <p className={styles.tabListText}>Blog</p>
              <p className={styles.tabListText}>How GryCare works?</p>
              <p className={styles.tabListText}>FAQ</p>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-6">
            <div>
              <h3 className={styles.tabheaderText}>Contact Us</h3>
            </div>
            <div>
              <p className={styles.tabListText}>hello@grycare.com</p>
              <p className={styles.tabListText}>+234 817 178 4611</p>
              {/* <Space size={"middle"} className="contactIconsRoot">
              <InstagramOutlined style={{ fontSize: 30, color: "#8A48EF" }} />
              <TwitterOutlined style={{ fontSize: 30, color: "#8A48EF" }} />
              <LinkedinOutlined style={{ fontSize: 30, color: "#8A48EF" }} />
            </Space> */}
            </div>
          </div>
        </div>
        <FooterContent />
      </div>
    </div>
  );
};
