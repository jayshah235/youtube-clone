import VideosGrid from "../../components/videos-grid";
import { VideosLoader } from "../../loaders/videos-skeleton";
import { CustomFetchHook } from "../../utils/fetchHook";

const HomePageVideos = () => {
  const { data, loading, error } = CustomFetchHook(
    `videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50`,
    true
  );

  if (loading) {
    return <VideosLoader />;
  }

  if (error) {
    return error.message;
  }

  return <VideosGrid data={data} />;
};

export default HomePageVideos;
