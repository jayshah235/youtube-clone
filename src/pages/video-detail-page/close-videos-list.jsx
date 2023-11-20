import { useParams } from "react-router-dom";
import { CustomFetchHook } from "../../utils/fetchHook";
import { SearchCustomVideo } from "../../components/search-custom-video";
import styles from "./styles.module.scss";

const CloseVideosList = () => {
  const { name } = useParams();
  const { data, loading } = CustomFetchHook(
    `search?part=snippet&maxResults=10&q=${name}`,
    false
  );

  const filterVideos = data?.items?.filter(
    (s) => s.id.kind === "youtube#video"
  );

  if(loading){
    return 'loading....'
  }

  return (
    <>
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
          link={`/youtube-clone/watch/${items?.id?.videoId ?? items?.id}/${
            items?.snippet.channelTitle
          }`}
          authorTitle={items?.snippet?.channelTitle}
          videoContentClassName={styles.content}
          extraClassImage={styles.imageWidth}
          showImage={false}
        />
      ))}
    </>
  );
};

export default CloseVideosList;
