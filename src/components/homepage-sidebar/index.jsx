import { IconsConatiner } from "../icons-component";
import { TiHome } from "react-icons/ti";
import { MdOutlineSubscriptions, MdOutlineVideoLibrary } from "react-icons/md";
import { SiShortcut } from "react-icons/si";
import styles from "./styles.module.scss";

export const HomePageSideBar = () => {
  return (
    <>
      <IconsConatiner text="Home" customClass={styles.iconsContainer}>
        <TiHome className="icons" />
      </IconsConatiner>
      <IconsConatiner text="Shorts" customClass={styles.iconsContainer}>
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
