import { useParams } from "react-router-dom";
import { CustomFetchHook } from "../../utils/fetchHook";
import { myConfig } from "../../config";
import VideosGrid from "../../components/videos-grid";
import styles from "./styles.module.scss";
import { VideosLoader } from "../../loaders/videos-skeleton";

const SearchedResultsLayout = () => {
  const { str } = useParams();
  const { data, loading, error } = CustomFetchHook(
    `${myConfig.API_ENDPOINT}/search?part=snippet&maxResults=50&q=${str}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`,
    false
  );

  const filterVideos = data?.items?.filter(
    (s) => s.id.kind === "youtube#video"
  );

  if (loading) {
    return (
      <div className={styles.searchResultsContainer}>
        <VideosLoader />
      </div>
    );
  }

  if (error) {
    return error.message;
  }

  return (
    <div className={styles.searchResultsContainer}>
      <h2 className={styles.resultsTitle}>
        Showing results for:- <strong> {str} </strong>
      </h2>
      <VideosGrid data={filterVideos} />
    </div>
  );
};

export default SearchedResultsLayout;
