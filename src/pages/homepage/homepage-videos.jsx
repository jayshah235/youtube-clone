import { CustomVideo } from "../../components/custom-video";
import { myConfig } from "../../config";
import styles from "./style.module.scss";
import { useCache } from "../../utils/cacheHook";

const HomePageVideos = () => {
  const { data, isLoading } = useCache("homepage", myConfig.HOME_API_ENDPOINT);
  const filterData = data?.data?.filter((s) => s.type === "video");

  if (isLoading) {
    return <p>loading.....</p>;
  }

  return (
    <div className={styles.videoGrid}>
      {filterData?.map((items, index) => (
        <section key={index} className={styles.videoWrapper}>
          <CustomVideo
            videoImage={items?.thumbnail?.[0]?.url}
            creatorImage={items?.channelThumbnail?.[0]?.url}
            title={items?.title}
            timePosted={items?.publishedTimeText}
            totalViews={items?.viewCount}
            link={`watch/${items?.videoId}`}
            authorTitle={items?.channelTitle}
          />
        </section>
      ))}
    </div>
  );
};

export default HomePageVideos;
