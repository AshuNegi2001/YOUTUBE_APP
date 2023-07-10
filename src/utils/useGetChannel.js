// This is a custom hook which provides us channel detail when we will pass channelId :

import { useState, useEffect } from "react";
import { GOOGLE_API_KEY } from "../Constants";

const useGetChannel = (channelId) => {
  const [channelItems, setChannelItems] = useState();

  useEffect(() => {
    // calling channel api of youtube for getting channel data like profileImageUrl:
    getChannelData();
  }, [channelId]);

  const getChannelData = async () => {
    try {
      const data = await fetch(
        "https://www.googleapis.com/youtube/v3/channels?key=" +
          GOOGLE_API_KEY +
          "&part=statistics&part=snippet&id=" +
          channelId
      );
      const json = await data.json();
      // console.log(json?.items[0]);
      setChannelItems(json?.items[0]);
    } catch (error) {
      console.log(error);
    }
  };
  return channelItems;
};
export default useGetChannel;
