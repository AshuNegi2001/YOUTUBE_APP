import {TbDots} from "react-icons/tb";
import useGetChannel from "../utils/useGetChannel";
import { useSearchParams } from "react-router-dom";
import useGetVideoData from "../utils/useGetVideoData";


const VideoDetail = ({channelId}) => {

  const [searchVideoParams] = useSearchParams();
  // console.log(searchVideoParams.get("v"));

  const channelDetails = useGetChannel(channelId);
  // console.log(channelDetails);

  const videoData = useGetVideoData(searchVideoParams.get("v"));
  console.log(videoData);

  return (
    <>
      <div>
        <div className="text-xl font-semibold">
          {videoData?.snippet?.title}
        </div>
        <div className="flex my-2 justify-between">
          <div className = "flex">
            <div>
              <img
                className="w-10 rounded-full bg-red-300"
                src={channelDetails?.snippet?.thumbnails?.medium?.url}
                alt=""
              />
            </div>
            <div className="mx-5">
              <div className="font-semibold">{channelDetails?.snippet?.title}</div>
              <div className="font-semibold text-xs text-gray-800">
                {channelDetails?.statistics?.subscriberCount} subscribers
              </div>
            </div>
            <div className="flex items-center mx-5">
              <button className=" py-2 px-4 rounded-full bg-black text-white hover:bg-red-600 ">
                Subscribe
              </button>
            </div>
          </div>
          <div className = "flex cursor-pointer items-center font-normal text-base">
            <div><button className ="bg-gray-50 rounded-full px-4 py-2 mx-2 hover:bg-slate-100 ">Like | dislike</button></div>
            <div><button className = "bg-gray-50 rounded-full px-4 py-2 mx-2 hover:bg-slate-100 ">share</button></div>
            <div><button className = "bg-gray-50 rounded-full px-4 py-2 mx-2 hover:bg-slate-100 ">Download</button></div>
            <div className = "ml-2 px-3  py-3 rounded-full bg-slate-50 hover:bg-slate-100 "><TbDots /></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoDetail;
