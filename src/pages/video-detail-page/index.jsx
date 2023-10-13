import { useParams } from "react-router-dom";
import { CustomFetchHook } from "../../utils/fetchHook";
import styles from "./styles.module.scss";

const VideoDetailPage = () => {
  const { ids } = useParams();
  const { data, loading } = CustomFetchHook(
    `https://yt-api.p.rapidapi.com/dl?id=${ids}`
  );
  
  if (data?.length || loading) {
    return <p>loading..</p>;
  }
  return (
    <article className={styles.detailPageWrapper}>
      <section className={styles.playVideoWrapper}>
        <iframe
          width="693px"
          height="390px"
          src={`https://www.youtube.com/embed/${data?.id}?enablejsapi=1&autoplay=1`}
          title="YouTube video player"
          allow="accelerometer; autoplay;
  clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
        <h2>{data?.title}</h2>
        <div className={styles.creatorInfo}>
          <figure>
            <img src={data?.thumbnail?.[0]?.url} alt="" />
          </figure>
          <div className={styles.subsInfo}>
            <h6>{data?.channelTitle}</h6>
            <p>197 subscribers</p>
          </div>
        </div>
      </section>
      <section className={styles.playlistWrapper}></section>
    </article>
  );
};

export default VideoDetailPage;
