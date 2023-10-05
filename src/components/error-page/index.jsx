import { NavLink } from "react-router-dom";
import pageNotFoundImage from "../../assets/pageNotFound.png";
import styles from "./styles.module.scss";

const ErrorPage = () => {
  return (
    <div className={styles.errorWrapper}>
      <div className={styles.errorPageContainer}>
        <figure className={styles.errorContent}>
          <img src={pageNotFoundImage} alt="" />
          <figcaption>
            This page isn't available. Sorry about that. Try searching for
            something else.
          </figcaption>
        </figure>
        <div className={styles.btnContainer}>
          <NavLink to="/youtube-clone" className="btn">
            Go back to homepage
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
