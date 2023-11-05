import { CustomVideo } from "../custom-video";
import styles from "./styles.module.scss";
import { viewsFormatter } from "../../utils/formatters";

const VideosGrid = ({ data }) => {
  return (
    <div className={styles.videoGrid}>
      {data?.map((items, index) => (
        <section key={index} className={styles.videoWrapper}>
          <CustomVideo
            videoImage={
              items?.snippet?.thumbnails?.maxres?.url ??
              items?.snippet?.thumbnails?.high?.url
            }
            title={items?.snippet?.title}
            timePosted={items?.snippet?.publishedAt}
            totalViews={viewsFormatter(items?.statistics?.viewCount)}
            link={`/youtube-clone/watch/${items?.id?.videoId ?? items?.id}/${items?.snippet.channelTitle}`}
            authorTitle={items?.snippet?.channelTitle}
          />
        </section>
      ))}
    </div>
  );
};

export default VideosGrid;
