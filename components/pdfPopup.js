import React from "react";
import styles from '../styles/pdf_popup.module.css';
const InfoPopup = ({handleClick, pdflink}) => {
  return (
    <div
      style={{
          backgroundColor: '#245274c4',

          /* Fixed position */
          left: 0,
          position: 'fixed',
          top: 0,

          /* Take full size */
          height: '100%',
          width: '100%',
          

          /* Displayed on top of other elements */
          zIndex: 9999,

          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
      }}
      onClick={handleClick}
      className={styles.main}
  >
    
     
     {/* <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.3.122/build/pdf.worker.min.js">
     <button onClick={handleClick}>Close modal button </button>
    <Viewer fileUrl={pdflink} />;
    </Worker> */}

    <button onClick={handleClick} className={styles.button}>X</button>
   
 
    <iframe src={pdflink} width="80%" height="90%" className={styles.iframe_pdf}>
    </iframe>
  </div>
  );
};

export default InfoPopup;