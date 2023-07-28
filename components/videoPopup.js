import React from "react";
import styles from '../styles/popup.module.css'

const videoPopup = props => {
  return (
    <div className={styles.popup_box}>
      <div className={styles.box}>
        <span className={styles.close_icon} onClick={props.handleClose}>x</span>
        <video className={styles.popup_video} autoPlay="1" loop controls>
          <source src={props.videoLink} type="video/mp4"></source>
          Your browser does not support HTML5 video.
          </video>
      </div>
    </div>
  );
};

export default videoPopup;