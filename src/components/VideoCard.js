import { useEffect, useState } from "react";
import { GOOGLE_API_KEY } from "../Constants";

const VideoCard = ({ info }) => {
  // console.log(info);

  const [channelItems, setChannelItems] = useState();
  const {
    snippet: { title, channelTitle, channelId, thumbnails },
    statistics,
  } = info;

  useEffect(() => {
    // calling channel api of youtube for getting channel data like profileImageUrl:
    getChannelsData();
  }, []);

  const getChannelsData = async () => {
    const data = await fetch(
      "https://www.googleapis.com/youtube/v3/channels?key=" +
        GOOGLE_API_KEY +
        "&part=statistics&part=snippet&id=" +
        channelId
    );
    const json = await data.json();
    // console.log(json?.items[0]);
    setChannelItems(json?.items[0]);
  };

  return (
    <>
      <div className="w-72 justify-between h-[250px] p-2 hover:shadow-lg hover:rounded-lg hover:scale-105 mx-1 mt-8 mb-2 cursor-pointer">
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
              src={channelItems?.snippet?.thumbnails?.medium?.url}
              alt=""
            />
          </div>
          <div className="w-10/12">
            <div className="line-clamp-2 font-semibold text-sm">{title}</div>
            <div className="text-xs">{channelTitle}</div>
            <div className="text-xs">{statistics?.viewCount} views</div>
          </div>
        </div>

        {/* <div>{info?.snippet?.publishedAt}</div> */}
      </div>
    </>
  );
};

export default VideoCard;
