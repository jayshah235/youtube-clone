import { Suspense, lazy } from "react";
import { SearchedVideosLoader } from "../../loaders/searched-videos-skeleton";
import styles from "./styles.module.scss";

const LazySearchResults = lazy(() => import("./resultsLayout"));

const SearchedResults = () => {
  return (
    <Suspense
      fallback={
        <div className={styles.searchResultsContainer}>
          <SearchedVideosLoader />
        </div>
      }
    >
      <LazySearchResults />
    </Suspense>
  );
};

export default SearchedResults;
