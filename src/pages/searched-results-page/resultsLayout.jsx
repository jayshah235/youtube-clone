import { useParams } from "react-router-dom";
import { CustomFetchHook } from "../../utils/fetchHook";
import { myConfig } from "../../config";
import styles from "./styles.module.scss";
import { VideosLoader } from "../../loaders/videos-skeleton";
import { SearchCustomVideo } from "../../components/search-custom-video";

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
      {filterVideos?.map((items, index) => (
        <SearchCustomVideo
          key={index}
          videoImage={
            items?.snippet?.thumbnails?.maxres?.url ??
            items?.snippet?.thumbnails?.high?.url
          }
          title={items?.snippet?.title}
          timePosted={items?.snippet?.publishedAt}
          totalViews={items?.statistics?.viewCount}
          link={`/youtube-clone/watch/${items?.id?.videoId ?? items?.id}`}
          authorTitle={items?.snippet?.channelTitle}
          description={items?.snippet?.description}
        />
      ))}
    </div>
  );
};

export default SearchedResultsLayout;
