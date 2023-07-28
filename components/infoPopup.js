import React from "react";
import styles from '../styles/infoPopup.module.css'
import parse from "html-react-parser";


const InfoPopup = (props) => {
  return (
    <div data-kontent-item-id="b34a8c40-979b-40bd-8f3f-a1697b3a7d98" data-kontent-element-codename="author_popup_content" className={styles.popup_box} onClick={props.handleClose} >
      <div className={styles.box} onClick={(e)=>{ e.stopPropagation();}}>
        <div className={styles.inner_container}>
            <div className={styles.image_container}>
                <img data-kontent-element-codename="author_image" src={props.author_image}></img>
            </div>
            <div className={styles.text_container}>
                <div className={styles.top_heading}>
                    <div className={styles.name}>
                        <div data-kontent-element-codename="name">{props.name}</div>
                    </div>
                    <div className={styles.occupation}>
                        <div data-kontent-element-codename="title">{props.title}</div>
                    </div>
                </div>

                <div className={styles.paragraph}>
                    <div data-kontent-element-codename="description">{parse(props.description)}</div>
                </div>

            </div>

        </div>
        <div className={styles.bottom_text_container}>
            <div data-kontent-element-codename="bottom_text">{parse(props.bottom_text)}</div>
        </div>
        
      </div>
    </div>
  );
};

export default InfoPopup;