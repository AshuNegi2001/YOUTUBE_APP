// This is a custom hook which provides us vedioData when we will pass videoId:

import { useState, useEffect } from "react";
import { GOOGLE_API_KEY } from "../Constants";

const useGetVideoData = (videoId) =>{
    const [videoData, setVideoData] = useState();

    useEffect(()=>{
        // API call for getting individual video data:
        getVideoDetail();
    
      }, [videoId]);
    
      const getVideoDetail =  async () => {
        try{
          const data = await fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=" + videoId +"&key=" + GOOGLE_API_KEY) ;
        const json = await data.json();
        // console.log(json?.items[0]);
        setVideoData(json?.items[0]);
        }catch(error){
          console.log(error);
        }
      }

    return videoData;
}

export default useGetVideoData;