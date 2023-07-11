import RelatedVideoCard from "./RelatedVideoCard";
import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { GOOGLE_API_KEY } from "../Constants";
import useGetVideoData from "../utils/useGetVideoData";
import { Link } from "react-router-dom";

const RelatedVideoContainer = () => {
  const [relatedVideoList, setRelatedVideoList] = useState([]);
  const [searchVideoParams] = useSearchParams();
  // console.log(searchVideoParams.get("v"));

  const videoData = useGetVideoData(searchVideoParams.get("v"));
  // console.log(videoData);

  useEffect(() => {
    getRelatedVedioList();
  }, [videoData]);

  const getRelatedVedioList = async () => {
    const data = await fetch(
      "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=" +
        videoData?.snippet?.localized?.title +
        "&key=" +
        GOOGLE_API_KEY
    );
    const json = await data.json();
    // console.log(json.items);
    setRelatedVideoList(json.items);
  };
 // Here, I used early return :
  return (relatedVideoList?.length === 0 ?  null : (
    <>
      <div className="">
        {relatedVideoList?.map((video, index) => {
          return (
            <Link
              key={index}
              to={
                "/watch?v=" +
                video?.id?.videoId +
                "&c=" +
                video?.snippet?.channelId
              }
            >
              <RelatedVideoCard info={video} />
            </Link>
          );
        })}
      </div>
    </>
  ))
};

export default RelatedVideoContainer;
