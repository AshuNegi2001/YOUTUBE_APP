import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/navSlice";
import { useSearchParams } from "react-router-dom";
import CommentContainer from "./CommentContainer";
import LiveChat from "./LiveChat";
import VideoInfo from "./VideoInfo";
import RelatedVideoContainer from "./RelatedVideoContainer";

const WatchPage = () => {
  const [searchVideoParams] = useSearchParams(); // we use useSearchParams to get search param id from search section.
  // console.log(searchVideoParams.get("v")); // for searching the param id through search
  const [searchChannelParams] = useSearchParams();
  console.log(searchChannelParams.get("c"));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  return (
    <div className="absolute left-0 z-0 w-full ">
      <div className=" mx-auto w-10/12  flex justify-between ">
        <div className="w-4/6">
          <div>
            <iframe
              width="850"
              height="500"
              src={
                "https://www.youtube.com/embed/" + searchVideoParams.get("v")
              }
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
          <div>
            <VideoInfo channelId={searchChannelParams.get("c")} />
          </div>
          <div>
            <CommentContainer videoid={searchVideoParams.get("v")} />
          </div>
        </div>
        <div className="w-[375px]">
          <div className="">
            <LiveChat />
          </div>
          <div>
            <RelatedVideoContainer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WatchPage;
