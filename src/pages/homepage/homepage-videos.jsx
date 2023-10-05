import { CustomVideo } from "../../components/custom-video";
import { videosDummyData } from "./data";
import styles from "./style.module.scss";

const HomePageVideos = () => {
  return (
    <div className={styles.videoGrid}>
      {videosDummyData?.map((items, index) => (
        <div key={index} className={styles.videoWrapper}>
          <CustomVideo
            videoImage={items?.videoUrl}
            creatorImage={items?.creatorImageUrl}
            title={items?.title}
            timePosted={items?.time}
            totalViews={items?.views}
            link={items?.link}
          />
        </div>
      ))}
    </div>
  );
};

export default HomePageVideos;
