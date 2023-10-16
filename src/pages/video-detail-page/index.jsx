import { useParams } from "react-router-dom";
import { CustomFetchHook } from "../../utils/fetchHook";
import styles from "./styles.module.scss";
import { myConfig } from "../../config";

const VideoDetailPage = () => {
  const { ids } = useParams();
  const { data, loading } = CustomFetchHook(
    `${myConfig.API_ENDPOINT}/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${ids}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
  );

  const selectedVideoData = data?.[0];

  if (loading) {
    return <p>loading..</p>;
  }
  return (
    <article className={styles.detailPageWrapper}>
      <section className={styles.playVideoWrapper}>
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
      </section>
      <section className={styles.playlistWrapper}></section>
    </article>
  );
};

export default VideoDetailPage;
