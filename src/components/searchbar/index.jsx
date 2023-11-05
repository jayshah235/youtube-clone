import { GoSearch } from "react-icons/go";
import { MdKeyboardVoice } from "react-icons/md";
import { IconsConatiner } from "../icons-component";
import { useGlobalContext } from "../../store/store";
import styles from "./styles.module.scss";
import { useNavigate } from "react-router-dom";
import { useDeferredValue } from "react";

const SearchBar = () => {
  const { value, setValue, setSearchValue } = useGlobalContext();

  const defferedValue = useDeferredValue(value);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (defferedValue?.length) {
      setSearchValue(defferedValue);
      navigate(`search/${defferedValue}`);
    }
    setValue("");
  };

  return (
    <div className={styles.searchWrapper}>
      <form className={styles.searchBar} onSubmit={handleSubmit}>
        <div className={styles.inputWrapper}>
          <input
            type="text"
            placeholder="Search"
            value={defferedValue}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>
        <button
          className={styles.searchIcon}
          type="submit"
          id="search"
          aria-label="search"
        >
          <GoSearch className="small-icons" />
        </button>
      </form>
      <IconsConatiner bgActive={true}>
        <MdKeyboardVoice className="small-icons" />
      </IconsConatiner>
    </div>
  );
};

export default SearchBar;
