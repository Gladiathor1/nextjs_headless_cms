import React from "react";
import styles from '../styles/header.module.css';
import Image from 'next/image';
import Link from 'next/link';
import mypic from '../public/vistex_logo.png';

const HeaderMenu = props => {
  return (
    <div className={styles.header_section}>
        <div className={styles.header_section_wrapper}>
          <div className={styles.header_image + " " + styles.fb14}>
          <Link href="/">
            <a>
          <Image
            src={mypic}
            alt="Picture of the author"
            width="100%"
          />
          </a>
          </Link>
          </div>
          <div className={styles.menu_items}>
            <Link href="menu">
              <div className={styles.text_align_center + " " + `${props.active == "1" ? styles.active_tab : ''}`}>
                <p>
                  Menu
                </p>
              </div>
            </Link>
            <Link href="introduction">
              <div className={styles.text_align_center + " " + `${props.active == "2" ? styles.active_tab : ''}`}>
                <p>
                  Introduction
                </p>
              </div>
            </Link>
            <Link href="last-time">
              <div className={styles.text_align_center + " " + `${props.active == "3" ? styles.active_tab : ''}`}>
                <p>
                  Last Time
                </p>
              </div>
            </Link>
            <Link href="add-the-who">
              <div className={styles.text_align_center + " " + `${props.active == "4" ? styles.active_tab : ''}`}>
                <p>
                  Add The Who
                </p>
              </div>
            </Link>
            <Link href="revenue-leakage">
              <div className={styles.text_align_center + " " + `${props.active == "5" ? styles.active_tab : ''}`}>
                <p>
                  Revenue Leakage
                </p>
              </div>
            </Link>
            <Link href="the-details">
              <div className={styles.text_align_center + " " + `${props.active == "6" ? styles.active_tab : ''}`}>
                <p>
                  The Details
                </p>
              </div>
            </Link>
            <Link href="business-growth">
              <div className={styles.text_align_center + " " + `${props.active == "7" ? styles.active_tab : ''}`}>
                <p>
                  Business Growth
                </p>
              </div>
            </Link>
            <Link href="conclusion">
              <div className={styles.text_align_center + " " + `${props.active == "8" ? styles.active_tab : ''}`}>
                <p>
                  Conclusion
                </p>
              </div>
            </Link>
          </div>

          <div className={styles.contactUs + " " + styles.fb12}>
          <Link href="butter-cp-menu">
            <div className={styles.contactUs_wrapper}>
              <p>
                Contact Us
              </p>
            </div>
          </Link>

          </div>

        </div>
    </div>
  );
};

export default HeaderMenu;