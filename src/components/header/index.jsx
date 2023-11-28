import { RxTextAlignJustify } from "react-icons/rx";
import logo from "../../assets/youtubeLogo.png";
import darkModeLogo from "../../assets/darkmodelogo.png";
import SearchBar from "../searchbar";
import { VscDeviceCameraVideo } from "react-icons/vsc";
import { IoMdNotificationsOutline } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { IconsConatiner } from "../icons-component";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../store/store";
import { useState } from "react";
import { Modal } from "../custom-modal";
import SideBarInfo from "./sidebarInfo";
import { IoSearchOutline } from "react-icons/io5";
import styles from "./styles.module.scss";

const Header = ({ themeMode }) => {
  const { theme } = useGlobalContext();
  const getTheme = theme === "light-theme";
  const [modal, setModal] = useState(false);
  const [serachModal, setSearchModal] = useState(false);

  return (
    <>
      <Modal
        showModal={modal}
        closeModal={() => setModal(false)}
        logo={getTheme ? logo : darkModeLogo}
        showLogo={true}
      >
        <SideBarInfo closeModal={() => setModal(false)} />
      </Modal>
      <Modal
        showModal={serachModal}
        closeModal={() => setSearchModal(false)}
        modalExtraClass={styles.searchModal}
      >
        <SearchBar />
      </Modal>
      <header className={styles.headerWrapper}>
        <div className={styles.logoSection}>
          <IconsConatiner
            onClick={() => setModal(!modal)}
            customClass={styles.desktopBtn}
          >
            <RxTextAlignJustify className="large-icons" />
          </IconsConatiner>
          <Link to="/youtube-clone" className={styles.logo}>
            <img src={getTheme ? logo : darkModeLogo} alt="logo" />
          </Link>
        </div>
        <div className={styles.searchSection}>
          <SearchBar showRecording={true} />
        </div>
        <div className={styles.manageAcountSection}>
          <IconsConatiner onClick={() => themeMode()}>
            {getTheme ? (
              <MdOutlineDarkMode className="icons" />
            ) : (
              <MdOutlineLightMode className="icons" />
            )}
          </IconsConatiner>
          <IconsConatiner customClass={styles.desktopBtn}>
            <VscDeviceCameraVideo className="icons" />
          </IconsConatiner>
          <IconsConatiner customClass={styles.desktopBtn}>
            <IoMdNotificationsOutline className="icons" />
          </IconsConatiner>
          <IconsConatiner
            customClass={styles.mobileBtn}
            onClick={() => setSearchModal(true)}
          >
            <IoSearchOutline className="icons" />
          </IconsConatiner>
          <IconsConatiner>
            <CgProfile className="icons" />
          </IconsConatiner>
        </div>
      </header>
    </>
  );
};

export default Header;
