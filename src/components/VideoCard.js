const VideoCard = ({ info }) => {
  // console.log(info);
  const {
    snippet: { title, channelTitle, thumbnails },
    statistics,
  } = info;

  return (
    <>
      <div className="w-72 justify-between h-[250px] p-2 hover:shadow-lg hover:rounded-lg hover:scale-105 mx-1 mt-8 mb-2 cursor-pointer">
        <div>
          <img className="rounded-lg mb-2" src={thumbnails?.medium?.url} alt="" />
        </div>
        <div className = "flex ">
          <div className = "w-2/12"><img className = "rounded-full w-8" src="https://yt3.ggpht.com/zgMN9BuSQByG1SrpmLwcNB3MQhjDhS_pl9H1h7TaRievMfS4UpU7Z36j77z5_hnIW4N8uFX3NA=s68-c-k-c0x00ffffff-no-rj" alt="" /></div>
          <div className = "w-10/12">
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
