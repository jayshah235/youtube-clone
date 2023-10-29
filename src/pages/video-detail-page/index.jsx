import { useParams } from "react-router-dom";
import { CustomFetchHook } from "../../utils/fetchHook";
import { Suspense, lazy } from "react";
import styles from "./styles.module.scss";
import CloseVideosList from "./close-videos-list";

const LazyLoadVideos = lazy(() => import("./video-section"));

const VideoDetailPage = () => {
  const { ids, name } = useParams();
  const { data, loading, error } = CustomFetchHook(
    `videos?part=snippet%2CcontentDetails%2Cstatistics&id=${ids}`,
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
        <CloseVideosList />
      </section>
    </article>
  );
};

export default VideoDetailPage;
