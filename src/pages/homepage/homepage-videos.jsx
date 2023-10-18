import { myConfig } from "../../config";
import VideosGrid from "../../components/videos-grid";
import { VideosLoader } from "../../loaders/videos-skeleton";
import { CustomFetchHook } from "../../utils/fetchHook";

const HomePageVideos = () => {
  const { data, loading, error } = CustomFetchHook(
    `${myConfig.API_ENDPOINT}/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`,
    true
  );

  if (loading) {
    return <VideosLoader />;
  };

  if (error) {
    return error.message;
  };

  return <VideosGrid data={data} />;
};

export default HomePageVideos;
