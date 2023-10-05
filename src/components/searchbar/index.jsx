import { GoSearch } from "react-icons/go";
import { MdKeyboardVoice } from "react-icons/md";
import { IconsConatiner } from "../icons-component";
import styles from "./styles.module.scss";

const SearchBar = () => {
  return (
    <div className={styles.searchWrapper}>
      <form className={styles.searchBar}>
        <div className={styles.inputWrapper}>
          <input type="text" placeholder="Search" />
        </div>
        <div className={styles.searchIcon}>
          <GoSearch size="20px" className="icons" />
        </div>
      </form>
      <IconsConatiner bgActive={true}>
        <MdKeyboardVoice size="20px" className="icons" />
      </IconsConatiner>
    </div>
  );
};

export default SearchBar;
