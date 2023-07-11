import useGetChannel from "../utils/useGetChannel.js";
// import { useEffect, useState } from "react";
// import { GOOGLE_API_KEY } from "../Constants";

const FilterCard = ({ info }) => {
  // console.log(info);
  // const [channelItems, setChannelItems] = useState();

  
  const {
    snippet: { channelTitle, channelId, description, thumbnails, title },
  } = info;
  // console.log(channelId);
  
  const channelDetails = useGetChannel(channelId);
  // console.log(channelDetails);
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
            <div className="text-sm">.211k views</div>
            <div className="flex py-2">
              <div>
                <img
                  className="w-5 mr-2 rounded-full"
                  src={channelDetails?.snippet?.thumbnails?.medium?.url}
                  alt="channel-image"
                />
              </div>
              <div className="text-sm">{channelTitle}</div>
            </div>
            <div className="line-clamp-1 text-sm">{description}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterCard;
