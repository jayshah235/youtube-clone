import { Link } from "react-router-dom";
import styles from "./styles.module.scss";

export const CustomVideo = (props) => {
  const { videoImage, creatorImage, title, timePosted, totalViews, link } = props;
  return (
    <Link to={link} className={styles.videoContainer}>
      <figure className={styles.videoImage}>
        <img src={videoImage} alt="" />
      </figure>
      <div className={styles.videoContent}>
        <img src={creatorImage} alt="" />
        <div className={styles.videoDesc}>
          <h3>{title?.length > 60 ? `${title?.substring(0, 60)}...` : title}</h3>
          <p>My Exciting Vlogs</p>
          <div className={styles.videoResultSection}>
            <p>{totalViews} Views</p>
            <p>{timePosted}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};