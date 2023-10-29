import { Link } from "react-router-dom";
import Image from "../image-component";
import placeholderimage from "../../assets/placeholdersrc.jpg";
import styles from "./styles.module.scss";

export const CustomVideo = (props) => {
  const {
    videoImage,
    title,
    timePosted,
    totalViews,
    link,
    authorTitle,
  } = props;

  return (
    <Link to={link} className={styles.videoContainer}>
      <figure className={styles.videoImage}>
        <Image
          loadingSrc={placeholderimage}
          src={videoImage}
          placeHolderStyle={{ width: "100%" }}
        />
      </figure>
      <div className={styles.videoContent}>
        <Image
          loadingSrc={placeholderimage}
          src={videoImage}
          placeHolderStyle={{ width: "40px" }}
        />
        <div className={styles.videoDesc}>
          <h3>
            {title?.length > 58 ? `${title?.substring(0, 58)}...` : title}
          </h3>
          <p>{authorTitle}</p>
            <div className={styles.videoResultSection}>
              {totalViews?.length && (
                <p>{totalViews} Views</p>
              )}
              <p>{timePosted}</p>
            </div>
        </div>
      </div>
    </Link>
  );
};
