import { BsFire } from "react-icons/bs";
import { SiYoutubegaming } from "react-icons/si";
import { MdOutlineLocalMovies } from "react-icons/md";
import { IoMusicalNotesOutline } from "react-icons/io5";
import { IoNewspaperOutline } from "react-icons/io5";
import { MdPodcasts } from "react-icons/md";
import { AiOutlineTrophy } from "react-icons/ai";
import { GoLightBulb } from "react-icons/go";
import styles from "./styles.module.scss";
import { NavLink } from "react-router-dom";

const SideBarInfo = ({ closeModal }) => {
  return (
    <>
      <div className={styles.sidebarConatiner}>
        <h6 className={styles.title}>Explore</h6>
        <NavLink
          to={"search/trending"}
          className={styles.listSections}
          onClick={closeModal}
        >
          <BsFire className="icons" />
          <p>Trending</p>
        </NavLink>
        <NavLink
          to={"search/gaming"}
          className={styles.listSections}
          onClick={closeModal}
        >
          <SiYoutubegaming className="icons" />
          <p>Gaming</p>
        </NavLink>
        <NavLink
          to={"search/movies"}
          className={styles.listSections}
          onClick={closeModal}
        >
          <MdOutlineLocalMovies className="icons" />
          <p>Movies</p>
        </NavLink>
        <NavLink
          to={"search/music"}
          className={styles.listSections}
          onClick={closeModal}
        >
          <IoMusicalNotesOutline className="icons" />
          <p>Music</p>
        </NavLink>
        <NavLink
          to={"search/news"}
          className={styles.listSections}
          onClick={closeModal}
        >
          <IoNewspaperOutline className="icons" />
          <p>News</p>
        </NavLink>
        <NavLink
          to={"search/podcasts"}
          className={styles.listSections}
          onClick={closeModal}
        >
          <MdPodcasts className="icons" />
          <p>Podcasts</p>
        </NavLink>
        <NavLink
          to={"search/sports"}
          className={styles.listSections}
          onClick={closeModal}
        >
          <AiOutlineTrophy className="icons" />
          <p>Sports</p>
        </NavLink>
        <NavLink
          to={"search/learning"}
          className={styles.listSections}
          onClick={closeModal}
        >
          <GoLightBulb className="icons" />
          <p>Learning</p>
        </NavLink>
      </div>
      <div className={styles.copyright}>
        <p>About Press CopyRight Contact us Creators Advertise Developers</p>
        <p>Terms Privacy Policy & Safety How Youtube Works Test new features</p>
        <p>© 2023 Google LLC</p>
      </div>
    </>
  );
};

export default SideBarInfo;
