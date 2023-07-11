import useGetVideoData from "../utils/useGetVideoData";
const RelatedVideoCard = ({ info }) => {
  // console.log(info);
  const {
    snippet: { channelTitle, publishedAt, thumbnails, title },
  } = info;
  const {
    id: { videoId },
  } = info;

  const videoData = useGetVideoData(videoId);
  // console.log(videoData);
  return (
    <>
      <div className="flex mb-2">
        <div className="w-[170px]">
          <img className = "rounded-lg" src ={thumbnails?.medium?.url} alt="thumbnail" />
        </div>
        <div className="w-[205px] px-2">
          <div className="line-clamp-2 text-sm font-medium mb-1">{title}</div>
          <div className="text-sm text-gray-500 line-clamp-1">
            {channelTitle}
          </div>
          <div className="flex text-xs text-gray-500 my-[2px]">
            <div className="mr-2">{videoData?.statistics?.viewCount}views</div>
            <div className = "line-clamp-1">{publishedAt}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RelatedVideoCard;
