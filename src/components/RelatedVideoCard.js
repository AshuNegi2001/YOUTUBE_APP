import numberConverter from "../utils/numberConverter";
import useGetChannel from "../utils/useGetChannel";
import useGetVideoData from "../utils/useGetVideoData";
import { useSearchParams } from "react-router-dom";
import { BsCheckCircleFill } from "react-icons/bs";

const RelatedVideoCard = ({ info }) => {
  const [searchChannelParams] = useSearchParams();
  // console.log(info);
  const {
    snippet: { channelTitle, publishedAt, thumbnails, title },
  } = info;
  const {
    id: { videoId },
  } = info;

  const videoData = useGetVideoData(videoId);
  // console.log(videoData);


  const channelDetails = useGetChannel(searchChannelParams.get("c"));
  
  const views = numberConverter(videoData?.statistics?.viewCount);
  return (
    <>
      <div className="flex mb-2">
        <div className="w-[170px]">
          <img className = "rounded-lg" src ={thumbnails?.medium?.url} alt="thumbnail" />
        </div>
        <div className="w-[205px] px-2">
          <div className="line-clamp-2 text-sm font-medium mb-1">{title}</div>
          <div className = "flex items-center">
          <div className="text-sm text-gray-500 line-clamp-1">
            {channelTitle}
          </div>
          <div className = "text-[10px] pl-1 text-gray-500">{channelDetails?.statistics?.subscriberCount >= 100000 ? <BsCheckCircleFill/> : null }
          </div>
          </div>
          <div className="flex text-xs text-gray-500 my-[2px]">
            <div className="mr-2">{views} views</div>
            <div className = "line-clamp-1">{publishedAt}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RelatedVideoCard;
