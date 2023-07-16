import getTimeAgo from "../utils/getTimeAgo";
import numberConverter from "../utils/numberConverter";
import useGetChannel from "../utils/useGetChannel";
import { BsCheckCircleFill, BsDot } from "react-icons/bs";

const VideoCard = ({ info }) => {
  // console.log(info);

  const {
    snippet: { title, channelTitle, channelId, thumbnails, publishedAt },
    statistics,
  } = info;
  // console.log(channelId);

  const channelDetails = useGetChannel(channelId);
  // console.log(channelDetails);

  const time = getTimeAgo(publishedAt);

  const views = numberConverter(statistics?.viewCount);
  return (
    <>
      <div className="w-72 justify-between h-[260px] p-2 hover:shadow-lg hover:rounded-lg hover:scale-105 mx-1 mt-3 mb-2 cursor-pointer">
        <div>
          <img
            className="rounded-lg mb-2"
            src={thumbnails?.medium?.url}
            alt=""
          />
        </div>
        <div className="flex ">
          <div className="w-2/12">
            <img
              className="rounded-full w-8"
              src={channelDetails?.snippet?.thumbnails?.medium?.url}
              alt=""
            />
          </div>
          <div className="w-10/12">
            <div className="line-clamp-2 font-semibold text-base">{title}</div>
            <div className="flex items-center">
              <div className="text-sm font-normal text-gray-600 pr-1">
                {channelTitle}
              </div>

              <div className="text-xs text-gray-500">
                {channelDetails?.statistics?.subscriberCount >= 100000 ? (
                  <BsCheckCircleFill />
                ) : null}
              </div>
            </div>
            <div className="flex items-center text-sm font-normal text-gray-600">
              <div className="">
                {views} views
              </div>
              <div className="">
                <BsDot />
              </div>
              <div className="line-clamp-1">{time}</div>
            </div>
          </div>
        </div>

        {/* <div>{info?.snippet?.publishedAt}</div> */}
      </div>
    </>
  );
};

export default VideoCard;
