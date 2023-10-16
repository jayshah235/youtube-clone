import { Link } from "react-router-dom";
import styles from "./styles.module.scss";

export const CustomVideo = (props) => {
  const {
    videoImage,
    creatorImage,
    title,
    timePosted,
    totalViews,
    link,
    authorTitle,
  } = props;
  return (
    <Link to={link} className={styles.videoContainer}>
      <figure className={styles.videoImage}>
        <img src={videoImage} alt="" />
      </figure>
      <div className={styles.videoContent}>
        <img src={creatorImage} alt="" />
        <div className={styles.videoDesc}>
          <h3>
            {title?.length > 58 ? `${title?.substring(0, 58)}...` : title}
          </h3>
          <p>{authorTitle}</p>
          {timePosted?.length && (
            <div className={styles.videoResultSection}>
              {totalViews?.length && (
                <p>{Number(totalViews)?.toLocaleString()} Views</p>
              )}
              <p>{timePosted}</p>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
};
