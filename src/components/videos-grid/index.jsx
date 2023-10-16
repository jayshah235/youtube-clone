import React from "react";
import styles from "./styles.module.scss";
import { CustomVideo } from "../custom-video";

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
            creatorImage={items?.snippet?.thumbnails?.default?.url}
            title={items?.snippet?.title}
            timePosted={items?.snippet?.publishedAt}
            totalViews={items?.statistics?.viewCount}
            link={`/youtube-clone/watch/${items?.id?.videoId ?? items?.id}`}
            authorTitle={items?.snippet?.channelTitle}
          />
        </section>
      ))}
    </div>
  );
};

export default VideosGrid;
