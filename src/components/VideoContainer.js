import { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
// import { YOUTUBE_VIDEOS_API } from "../Constants";
import { Link } from "react-router-dom";
import ShimmerVideoCard from "./ShimmerVideoCard";
import { GOOGLE_API_KEY } from "../Constants";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  
  useEffect(() => {
    // Calling the  Video list API of youtube:
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(" https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" + GOOGLE_API_KEY);
    const json = await data.json();
    // console.log(json?.items);
    setVideos(json?.items);
  };

  // console.log(channelItems)

  return videos?.length === 0 ? (
    <ShimmerVideoCard />
  ) : (
    <div className="flex flex-wrap">
      {videos.map((video, index) => {
        return (
          <Link key={index} to={"/watch?v=" + video.id + "&c="  + video?.snippet?.channelId }>
            <VideoCard info={video} />
          </Link>
        );
      })}
    </div>
  );
};

export default VideoContainer;
