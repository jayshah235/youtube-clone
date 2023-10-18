import { Suspense, lazy } from "react";
import { VideosLoader } from "../../loaders/videos-skeleton";
import styles from "./styles.module.scss";

const LazySearchResults = lazy(() => import("./resultsLayout"));

const SearchedResults = () => {
  return (
    <Suspense
      fallback={
        <div className={styles.searchResultsContainer}>
          <VideosLoader />
        </div>
      }
    >
      <LazySearchResults />
    </Suspense>
  );
};

export default SearchedResults;
