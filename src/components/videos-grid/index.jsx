import { CustomVideo } from "../custom-video";
import styles from "./styles.module.scss";
import { viewsFormatter } from "../../utils/formatters";

const VideosGrid = ({ data }) => {
  // const getHours = (date) => {
  //   const currentTimeStamp = new Date().getTime();
  //   const getPostedTimeStamp = new Date(date).getTime();
  //   const milliseconds = Math.abs(currentTimeStamp - getPostedTimeStamp);
  //   if (isNaN(milliseconds)) {
  //     return 0;
  //   } else {
  //     const hours = milliseconds / 36e5;
  //     return Math.floor(hours);
  //   }
  // };

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
