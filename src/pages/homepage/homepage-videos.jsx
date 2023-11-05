import VideosGrid from "../../components/videos-grid";
import { VideosLoader } from "../../loaders/videos-skeleton";
import { useCache } from "../../utils/cacheHook";

const HomePageVideos = () => {
  const { data, isError, isLoading } = useCache(
    "homepage",
    "videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50"
  );

  if (isLoading) {
    return <VideosLoader />;
  };

  if (isError) {
    return 'Something Went Wrong...';
  };

  return <VideosGrid data={data?.items} />;
};

export default HomePageVideos;
