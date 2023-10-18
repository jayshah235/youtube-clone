import styles from "./styles.module.scss";

const PlayVideo = (props) => {
  const { selectedVideoData } = props;
  return (
    <div className={styles.videoPlayerContainer}>
      <iframe
        width="100%"
        height="450px"
        src={`https://www.youtube.com/embed/${selectedVideoData?.id}?enablejsapi=1&autoplay=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay;
  clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
      <h2>{selectedVideoData?.snippet?.title}</h2>
      <div className={styles.creatorInfo}>
        <figure>
          <img
            src={selectedVideoData?.snippet?.thumbnails?.default?.url}
            alt="thimbnail"
          />
        </figure>
        <div className={styles.subsInfo}>
          <h6>{selectedVideoData?.snippet?.channelTitle}</h6>
          <p>197 subscribers</p>
        </div>
      </div>
    </div>
  );
};

export default PlayVideo;
