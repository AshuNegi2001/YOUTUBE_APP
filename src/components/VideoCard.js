import useGetChannel from "../utils/useGetChannel";

const VideoCard = ({ info }) => {
  // console.log(info);

  const {
    snippet: { title, channelTitle, channelId, thumbnails },
    statistics,
  } = info;
  // console.log(channelId);

  const channelDetails = useGetChannel(channelId);
  // console.log(channelDetails);

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
            <div className="text-sm font-normal text-gray-600">{channelTitle}</div>
            <div className="text-sm font-normal text-gray-600">{statistics?.viewCount} views</div>
          </div>
        </div>

        {/* <div>{info?.snippet?.publishedAt}</div> */}
      </div>
    </>
  );
};

export default VideoCard;
