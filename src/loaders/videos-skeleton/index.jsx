import VideoSkeletonPattern from "./pattern";
import styles from "./styles.module.scss";

export const VideosLoader = () => {
  return (
    <div className={styles.videosLoader}>
      <VideoSkeletonPattern />
      <VideoSkeletonPattern />
      <VideoSkeletonPattern />
      <VideoSkeletonPattern />
      <VideoSkeletonPattern />
      <VideoSkeletonPattern />
      <VideoSkeletonPattern />
      <VideoSkeletonPattern />
      <VideoSkeletonPattern />
      <VideoSkeletonPattern />
      <VideoSkeletonPattern />
      <VideoSkeletonPattern />
    </div>
  );
};
