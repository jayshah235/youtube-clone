import styles from "./styles.module.scss";

export const HeaderLoader = () => {
  return (
      <div className={styles.headerSkeleton}>
        <div className={styles.logoSection}>
          <div className={styles.skeleton} />
          <div className={styles.logoSkeleton} />
        </div>
        <div className={styles.searchSection}>
          <div className={styles.searchBar} />
          <div className={styles.voiceIcon} />
        </div>
        <div className={styles.iconssSection}>
          <div className={styles.voiceIcon} />
          <div className={styles.voiceIcon} />
          <div className={styles.voiceIcon} />
          <div className={styles.voiceIcon} />
        </div>
      </div>
  );
};
