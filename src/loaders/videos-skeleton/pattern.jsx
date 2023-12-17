import styles from "./styles.module.scss";

const VideoSkeletonPattern = () => {
  return (
    <div className={styles.vidWidth}>
      <div className={styles.videosList} />
      <div className={styles.videosInfo}>
        <div className={styles.image} />
        <div className={styles.titleWrapper}>
          <div className={styles.title} />
          <div className={styles.subTitle} />
        </div>
      </div>
    </div>
  );
};

export default VideoSkeletonPattern;
