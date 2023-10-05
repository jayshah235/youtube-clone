import { Suspense, lazy, useEffect } from "react";
import styles from "./style.module.scss";

const LazySideBar = lazy(() => import("../../components/homepage-sidebar"));
const LazyLoadVideos = lazy(() => import("./homepage-videos"));
const LazyLoadSliders = lazy(() => import("../../components/sliders"));

export const HomePage = () => {
  useEffect(() => {
    localStorage.setItem("theme", "light-theme");
  }, []);
  return (
    <article className={styles.homepageContainer}>
      <aside className={styles.sideBarContainer}>
        <Suspense fallback={<>loading........</>}>
          <LazySideBar />
        </Suspense>
      </aside>
      <section className={styles.mainContentContainer}>
        <Suspense fallback={<>loading...</>}>
          <LazyLoadSliders />
        </Suspense>
        <Suspense fallback={<>loading........</>}>
          <LazyLoadVideos />
        </Suspense>
      </section>
    </article>
  );
};
