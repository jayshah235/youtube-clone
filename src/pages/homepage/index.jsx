import { Suspense, lazy, useEffect } from "react";
import { SidebarLoader } from "../../loaders/sidebar-skeleton";
import { SliderLoader } from "../../loaders/sliders-skeleton";
import { VideosLoader } from "../../loaders/videos-skeleton";
import styles from "./style.module.scss";

const LazySideBar = lazy(() => import("../../components/homepage-sidebar"));
const LazyLoadVideos = lazy(() => import("./homepage-videos"));
const LazyLoadSliders = lazy(() => import("../../components/sliders"));

const HomePage = () => {
  useEffect(() => {
    localStorage.setItem("theme", "light-theme");
  }, []);
  return (
    <article className={styles.homepageContainer}>
      <aside className={styles.sideBarContainer}>
        <Suspense fallback={<SidebarLoader />}>
          <LazySideBar />
        </Suspense>
      </aside>
      <section className={styles.mainContentContainer}>
        <Suspense fallback={<SliderLoader />}>
          <LazyLoadSliders />
        </Suspense>
        <Suspense
          fallback={
            <div style={{ marginTop: "20px" }}>
              <VideosLoader />
            </div>
          }
        >
          <LazyLoadVideos />
        </Suspense>
      </section>
    </article>
  );
};

export default HomePage;
