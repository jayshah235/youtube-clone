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
import { useAuth0 } from "@auth0/auth0-react";
import SideBarInfo from "./sidebarInfo";
import styles from "./styles.module.scss";

const Header = ({ themeMode }) => {
  const { theme } = useGlobalContext();
  const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();
  const [showSetting, setShowSetting] = useState(false);
  const getTheme = theme === "light-theme";
  const [modal, setModal] = useState(false);
  return (
    <>
      <Modal
        showModal={modal}
        closeModal={() => setModal(false)}
        logo={getTheme ? logo : darkModeLogo}
      >
        <SideBarInfo closeModal={() => setModal(false)} />
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
          <SearchBar />
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
          <IconsConatiner>
            <IoMdNotificationsOutline className="icons" />
          </IconsConatiner>
          <div
            className={styles.userInfoContainer}
            onClick={() => setShowSetting(!showSetting)}
          >
            <IconsConatiner>
              {isAuthenticated ? (
                <figure className={styles.profilePic}>
                  <img src={user?.picture ?? ""} alt="" />
                </figure>
              ) : (
                <CgProfile className="icons" />
              )}
            </IconsConatiner>
            {showSetting && (
              <div className={styles.manageSettingsBox}>
                {isAuthenticated ? (
                  <div>
                    <div className={styles.userInfo}>
                      <figure className={styles.profilePic}>
                        <img src={user?.picture ?? ""} alt="profilepic" />
                      </figure>
                      <div className={styles.userDetails}>
                        <h6>{user?.name}</h6>
                        <h6>{user?.email}</h6>
                        <p>Manage your Google Account</p>
                      </div>
                    </div>
                    <div className={styles.setModes}>
                      {getTheme ? (
                        <MdOutlineDarkMode size="25px" className="icons" />
                      ) : (
                        <MdOutlineLightMode size="25px" className="icons" />
                      )}
                      <div
                        className={styles.userDetails}
                        onClick={() => themeMode()}
                      >
                        <p>{getTheme ? "Dark Mode" : "Light Mode"}</p>
                      </div>
                    </div>
                    <button onClick={() => logout()}>Logout</button>
                  </div>
                ) : (
                  <button onClick={() => loginWithRedirect()}>Login</button>
                )}
              </div>
            )}
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
