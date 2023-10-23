import styles from "./styles.module.scss";

export const SearchLoaderPattern = () => {
  return (
    <div className={styles.vidWidth}>
      <div className={styles.videosList} />
      <div className={styles.contentSize}>
        <div className={styles.heading} />
        <div className={styles.subTitle} />
        <div className={styles.videosInfo}>
          <div className={styles.image} />
          <div className={styles.titleWrapper}>
            <div className={styles.title} />
            <div className={styles.subTitle} />
          </div>
        </div>
        <div className={styles.heading} />
      </div>
    </div>
  );
};
