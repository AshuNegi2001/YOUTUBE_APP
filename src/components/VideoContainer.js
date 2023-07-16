import { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import { YOUTUBE_VIDEOS_API } from "../Constants";
import { Link } from "react-router-dom";
import ShimmerVideoCard from "./ShimmerVideoCard";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    // Calling the  Video list API of youtube:
    getVideos();
  }, []);

  const getVideos = async () => {
    try {
      const data = await fetch(YOUTUBE_VIDEOS_API);
      const json = await data.json();
      // console.log(json?.items);
      setVideos(json?.items);
    } catch (error) {
      console.log(error);
    }
  };

  // console.log(channelItems)

  return videos?.length === 0 ? (
    <ShimmerVideoCard />
  ) : (
    <div className="flex flex-wrap my-24 ">
      {videos.map((video, index) => {
        return (
          <Link
            key={index}
            to={"/watch?v=" + video.id + "&c=" + video?.snippet?.channelId}
          >
            <VideoCard info={video} />
          </Link>
        );
      })}
    </div>
  );
};

export default VideoContainer;
