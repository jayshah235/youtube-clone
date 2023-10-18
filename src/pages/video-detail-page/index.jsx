import { useParams } from "react-router-dom";
import { CustomFetchHook } from "../../utils/fetchHook";
import { myConfig } from "../../config";
import { Suspense, lazy } from "react";
import styles from "./styles.module.scss";

const LazyLoadVideos = lazy(() => import("./video-section"));

const VideoDetailPage = () => {
  const { ids } = useParams();
  const { data, loading, error } = CustomFetchHook(
    `${myConfig.API_ENDPOINT}/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${ids}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`,
    false
  );

  const selectedVideoData = data?.items?.[0];

  if (loading) {
    return <p>loading..</p>;
  }

  if (error) {
    return error.message;
  }

  return (
    <article className={styles.detailPageWrapper}>
      <section className={styles.playVideoWrapper}>
        <Suspense fallback={<>video is loading..........</>}>
          <LazyLoadVideos selectedVideoData={selectedVideoData} />
        </Suspense>
      </section>
      <section className={styles.playlistWrapper}>
        Most close playlist is going to appear here..
      </section>
    </article>
  );
};

export default VideoDetailPage;
