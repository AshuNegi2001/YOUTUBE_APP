import getTimeAgo from "../utils/getTimeAgo.js";
import numberConverter from "../utils/numberConverter.js";
import useGetChannel from "../utils/useGetChannel.js";
import useGetVideoData from "../utils/useGetVideoData.js";
import { BsCheckCircleFill, BsDot } from "react-icons/bs";
// import { useEffect, useState } from "react";
// import { GOOGLE_API_KEY } from "../Constants";

const FilterCard = ({ info }) => {
  console.log(info);
  // const [channelItems, setChannelItems] = useState();

  const {
    snippet: { channelTitle, channelId, description, thumbnails, title },
    id: { videoId },
  } = info;
  // console.log(channelId);

  const videoData = useGetVideoData(videoId);
  // console.log(videoData);
  const views = numberConverter(videoData?.statistics?.viewCount);

  const channelDetails = useGetChannel(channelId);
  // console.log(channelDetails);

  const time = getTimeAgo(videoData?.snippet?.publishedAt);
  return (
    <>
      <div className="w-full h-52">
        <div className="flex w-3/4 cursor-pointer mx-auto my-1">
          <div className=" w-1/3 p-2">
            <img
              className="rounded-xl h-48 w-72"
              src={thumbnails.medium.url}
              alt="thumbnail"
            />
          </div>
          <div className="flex flex-col w-2/3 p-2 ml-1">
            <div className="font-semibold text-lg line-clamp-2 py-1 ">
              {title}
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <div>{views} views</div>
              <div>
                <BsDot />
              </div>
              <div>{time}</div>
            </div>
            <div className="flex py-2">
              <div>
                <img
                  className="w-5 mr-2 rounded-full"
                  src={channelDetails?.snippet?.thumbnails?.medium?.url}
                  alt="channel-image"
                />
              </div>
              <div className="flex items-center text-gray-600">
                <div className="text-sm pr-1">{channelTitle}</div>
                <div className="text-xs text-gray-500">
                  {channelDetails?.statistics?.subscriberCount >= 100000 ? (
                    <BsCheckCircleFill />
                  ) : null}
                </div>
              </div>
            </div>
            <div className="line-clamp-1 text-sm text-gray-600">{description}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterCard;
