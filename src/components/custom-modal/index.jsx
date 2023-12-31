import { RxTextAlignJustify } from "react-icons/rx";
import { IconsConatiner } from "../icons-component";
import styles from "./styles.module.scss";
import { Link } from "react-router-dom";
// import logo from "../../assets/youtubeLogo.png";
import { useEffect } from "react";

export const Modal = (props) => {
  const { showModal, closeModal, logo, modalExtraClass,  showLogo, children } = props;

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showModal]);

  return (
    <>
      {showModal && (
        <>
          <div className={styles.modalOverlay} onClick={() => closeModal()} />
          <div className={[styles.modalContainer, modalExtraClass]?.join(' ')}>
            {showLogo && 
            <div className={styles.logoSection}>
              <IconsConatiner onClick={() => closeModal()}>
                <RxTextAlignJustify className="large-icons" />
              </IconsConatiner>
              <Link to="/youtube-clone" className={styles.logo}>
                <img src={logo} alt="logo" />
              </Link>
            </div>
            }
            {children}
          </div>
        </>
      )}
    </>
  );
};
