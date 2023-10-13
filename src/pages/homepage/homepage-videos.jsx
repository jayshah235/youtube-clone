import { CustomVideo } from "../../components/custom-video";
import { myConfig } from "../../config";
import styles from "./style.module.scss";
import { useCache } from "../../utils/cacheHook";

const HomePageVideos = () => {
  const { data, isLoading } = useCache("homepage", myConfig.HOME_API_ENDPOINT);

  if (isLoading) {
    return <p>loading.....</p>;
  }

  return (
    <div className={styles.videoGrid}>
      {data?.contents?.map((items, index) => (
        <section key={index} className={styles.videoWrapper}>
          <CustomVideo
            videoImage={items?.video?.thumbnails?.[0]?.url}
            creatorImage={items?.video?.thumbnails?.[0]?.url}
            title={items?.video?.title}
            timePosted={items?.video?.publishedTimeText}
            totalViews={items?.video?.viewCountText}
            link={`watch/${items?.video?.channelId}`}
            authorTitle={items?.video?.channelName}
          />
        </section>
      ))}
    </div>
  );
};

export default HomePageVideos;
