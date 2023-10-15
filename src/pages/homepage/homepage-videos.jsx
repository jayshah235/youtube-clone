import { CustomVideo } from "../../components/custom-video";
import styles from "./style.module.scss";
import { useCache } from "../../utils/cacheHook";

const HomePageVideos = () => {
  const { data, isLoading } = useCache("homepage", `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`);

  if (isLoading) {
    return <p>loading.....</p>;
  }

  return (
    <div className={styles.videoGrid}>
      {data?.items?.map((items, index) => (
        <section key={index} className={styles.videoWrapper}>
          <CustomVideo
            videoImage={items?.snippet?.thumbnails?.maxres?.url}
            creatorImage={items?.snippet?.thumbnails?.default?.url}
            title={items?.snippet?.title}
            timePosted={items?.snippet?.publishedAt}
            totalViews={items?.statistics?.viewCount}
            link={`watch/${items?.id}`}
            authorTitle={items?.snippet?.channelTitle}
          />
        </section>
      ))}
    </div>
  );
};

export default HomePageVideos;
