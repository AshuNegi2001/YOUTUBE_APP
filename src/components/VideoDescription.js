import { useSearchParams } from "react-router-dom";
import useGetVideoData from "../utils/useGetVideoData";
import numberConverter from "../utils/numberConverter";

const VideoDescription = () => {
  const [searchVideoParams] = useSearchParams();
  // console.log(searchVideoParams.get("v"));

  const videoData = useGetVideoData(searchVideoParams.get("v"));
  // console.log(videoData);
  const views = numberConverter(videoData?.statistics?.viewCount);
  
  return (
    <>
      <div className="p-2 my-4 bg-gray-50 rounded-lg">
        <div className = "flex">
          <div>{views} views</div>
          <div className = "px-2">{videoData?.snippet?.publishedAt}</div>
        </div>
        <div className = "line-clamp-2">
        {videoData?.snippet?.description}
        </div>
      </div>
    </>
  );
};

export default VideoDescription;
