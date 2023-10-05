import { slidersData } from "./data";
import styles from "./stye.module.scss";

const Sliders = () => {
  return (
    <div className={styles.slidersContainer}>
      <ul className={styles.categoryLists}>
        {slidersData?.map((items, index) => (
          <li key={index}>{items?.label}</li>
        ))}
      </ul>
    </div>
  );
};

export default Sliders;
