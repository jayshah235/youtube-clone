import { RxTextAlignJustify } from "react-icons/rx";
import logo from "../../assets/youtubeLogo.png";
import darkModeLogo from "../../assets/dark-mode-logo.png";
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
import styles from "./styles.module.scss";
import { useAuth0 } from "@auth0/auth0-react";

const Header = ({ themeMode }) => {
  const { theme } = useGlobalContext();
  const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();
  const [showSetting, setShowSetting] = useState(false);
  const getTheme = theme === "light-theme" ?? "light-theme";
  const [modal, setModal] = useState(false);
  return (
    <>
      <Modal showModal={modal} closeModal={() => setModal(false)}>
        <div className={styles.sidebarConatiner}>
          <p>test</p>
          <p>test</p>
        </div>
      </Modal>
      <header className={styles.headerWrapper}>
        <div className={styles.logoSection}>
          <IconsConatiner onClick={() => setModal(!modal)}>
            <RxTextAlignJustify size="30px" className="icons" />
          </IconsConatiner>
          <Link
            to="/youtube-clone"
            className={[!getTheme && styles.logoHeight, styles.logo]?.join(" ")}
          >
            <img src={getTheme ? logo : darkModeLogo} alt="logo" />
          </Link>
        </div>
        <div className={styles.searchSection}>
          <SearchBar />
        </div>
        <div className={styles.manageAcountSection}>
          <IconsConatiner onClick={() => themeMode()}>
            {getTheme ? (
              <MdOutlineDarkMode size="25px" className="icons" />
            ) : (
              <MdOutlineLightMode size="25px" className="icons" />
            )}
          </IconsConatiner>
          <IconsConatiner>
            <VscDeviceCameraVideo size="25px" className="icons" />
          </IconsConatiner>
          <IconsConatiner>
            <IoMdNotificationsOutline size="25px" className="icons" />
          </IconsConatiner>
          <Link
            className={styles.userInfoContainer}
            onClick={() => setShowSetting(!showSetting)}
          >
            <IconsConatiner>
              {isAuthenticated ? (
                <figure className={styles.profilePic}>
                  <img src={user?.picture ?? ""} alt="" />
                </figure>
              ) : (
                <CgProfile size="25px" className="icons" />
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
          </Link>
        </div>
      </header>
    </>
  );
};

export default Header;
