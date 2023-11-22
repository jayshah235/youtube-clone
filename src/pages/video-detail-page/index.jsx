import { useParams } from "react-router-dom";
import { CustomFetchHook } from "../../utils/fetchHook";
import { Suspense, lazy } from "react";
import { InitialLoadUi } from "../../components/initial-load-ui-component";
import { SearchedVideosLoader } from "../../loaders/searched-videos-skeleton";
import styles from "./styles.module.scss";

const LazyLoadVideos = lazy(() => import("./video-section"));

const LazyLoadCloseVideos = lazy(() => import("./close-videos-list"));

const VideoDetailPage = () => {
  const { ids } = useParams();
  const { data, loading, error } = CustomFetchHook(
    `videos?part=snippet%2CcontentDetails%2Cstatistics&id=${ids}`,
    false
  );

  const selectedVideoData = data?.items?.[0];

  if (loading) {
    return <InitialLoadUi />;
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
        <Suspense fallback={<SearchedVideosLoader />}>
          <LazyLoadCloseVideos />
        </Suspense>
      </section>
    </article>
  );
};

export default VideoDetailPage;
