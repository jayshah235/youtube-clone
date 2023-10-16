import { GoSearch } from "react-icons/go";
import { MdKeyboardVoice } from "react-icons/md";
import { IconsConatiner } from "../icons-component";
import { useGlobalContext } from "../../store/store";
import styles from "./styles.module.scss";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const { value, setValue, searchValue, setSearchValue } = useGlobalContext();
  console.log(searchValue, "search");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value?.length) {
      setSearchValue(value);
      navigate(`search/${value}`);
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
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>
        <button className={styles.searchIcon} type="submit">
          <GoSearch size="20px" className="icons" />
        </button>
      </form>
      <IconsConatiner bgActive={true}>
        <MdKeyboardVoice size="20px" className="icons" />
      </IconsConatiner>
    </div>
  );
};

export default SearchBar;
