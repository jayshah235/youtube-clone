import { useParams } from "react-router-dom";
import { CustomFetchHook } from "../../utils/fetchHook";

const VideoDetailPage = () => {
  const { ids } = useParams();
  const { data, loading } = CustomFetchHook(
    `https://youtube-search-and-download.p.rapidapi.com/channel/about?id=${ids}`
  );
  if (data?.length || loading) {
    return <p>loading..</p>;
  }
  return <div>{data?.title}</div>;
};

export default VideoDetailPage;
