import { IconsConatiner } from "../icons-component";
import { TiHome } from "react-icons/ti";
import { MdOutlineSubscriptions, MdOutlineVideoLibrary } from "react-icons/md";
import { SiShortcut } from "react-icons/si";
import styles from "./styles.module.scss";
import { useNavigate } from "react-router-dom";

export const HomePageSideBar = () => {
  const navigate = useNavigate();

  const navigateFunc = (routes) => {
navigate(routes)
  }
  return (
    <>
      <IconsConatiner text="Home" customClass={styles.iconsContainer} onClick={() => navigateFunc('/youtube-clone')}>
        <TiHome className="icons" />
      </IconsConatiner>
      <IconsConatiner text="Shorts" customClass={styles.iconsContainer} onClick={() => navigateFunc('search/shorts')}>
        <SiShortcut className="icons" />
      </IconsConatiner>
      <IconsConatiner text="Subscription" customClass={styles.iconsContainer}>
        <MdOutlineSubscriptions className="icons" />
      </IconsConatiner>
      <IconsConatiner text="Library" customClass={styles.iconsContainer}>
        <MdOutlineVideoLibrary className="icons" />
      </IconsConatiner>
    </>
  );
};

export default HomePageSideBar;
