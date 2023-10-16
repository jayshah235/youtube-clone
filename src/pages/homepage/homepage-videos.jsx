import { myConfig } from "../../config";
import VideosGrid from "../../components/videos-grid";
import { VideosLoader } from "../../loaders/videos-skeleton";
import { CustomFetchHook } from "../../utils/fetchHook";

const HomePageVideos = () => {
  const { data, loading } = CustomFetchHook(
    `${myConfig.API_ENDPOINT}/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`);

  // console.log(data, "data");

  // useEffect(() => {
  //   if (!loadingRef.current) return;
  //   const observer = new IntersectionObserver(
  //     ([entry]) => {
  //       if (entry.isIntersecting) {
  //         console.log("inside intersection...");
  //         setResults((prev) => prev + 1);
  //       }
  //     },
  //     { threshold: 1 }
  //   );
  //   observer.observe(loadingRef.current);
  //   return () => {
  //     if (loadingRef.current) observer.unobserve(loadingRef.current);
  //   };
  // }, [results, data]);

  if (loading) {
    return <VideosLoader />;
  }

  return (
    <>
      <VideosGrid data={data} />
      {/* <div ref={loadingRef}>loading.....</div> */}
    </>
  );
};

export default HomePageVideos;
