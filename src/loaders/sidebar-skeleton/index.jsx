import styles from "./style.module.scss";

export const SidebarLoader = () => {
  return (
    <div className={styles.sidebarLoader}>
      <div className={styles.iconsLoader} />
      <div className={styles.iconsLoader} />
      <div className={styles.iconsLoader} />
      <div className={styles.iconsLoader} />
    </div>
  );
};
