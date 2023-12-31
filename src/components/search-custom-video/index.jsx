import { Link } from "react-router-dom";
import Image from "../image-component";
import placeholderimage from "../../assets/placeholdersrc.jpg";
import styles from "./styles.module.scss";
import { dateFormatter } from "../../utils/formatters";

export const SearchCustomVideo = (props) => {
  const {
    videoImage,
    title,
    timePosted,
    link,
    authorTitle,
    description,
    videoContentClassName,
    extraClassImage,
    showImage = true
  } = props;
  return (
    <Link to={link} className={styles.videoContainer}>
      <figure className={[styles.videoImage, extraClassImage]?.join(' ')}>
        <Image
          loadingSrc={placeholderimage}
          src={videoImage}
          placeHolderStyle={{ width: "100%" }}
        />
      </figure>
      <div className={[styles.videoContent, videoContentClassName]?.join(' ')}>
        <h3>{title}</h3>
        <p className={styles.para}>{dateFormatter(timePosted)}</p>

        <div className={styles.videoDesc}>
          {showImage && 
          <Image
            loadingSrc={placeholderimage}
            src={videoImage}
            placeHolderStyle={{ width: "40px" }}
          />
        }
          <p className={styles.para}>{authorTitle}</p>
        </div>

        <p className={styles.para}>{description}</p>
      </div>
    </Link>
  );
};
