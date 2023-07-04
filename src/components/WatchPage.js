import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/navSlice";
import { useSearchParams } from "react-router-dom";
import CommentContainer from "./CommentContainer";

const WatchPage = () => {
  const [searchParams] = useSearchParams(); // we use useSearchParams to get search param id from search section.
  // console.log(searchParams.get("v")); // for searching the param id through search
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  return (
    <div className="absolute left-0 z-0 w-full">
      <div className=" mx-auto w-10/12  flex justify-between">
        <div className = "w-4/6">
        <div>
          <iframe
            width="850"
            height="500"
            src={"https://www.youtube.com/embed/" + searchParams.get("v")}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div>
          <CommentContainer  videoid = {searchParams.get("v")}/>
        </div>
        </div>
        <div className = "w-[375px]">sideSection</div>
      </div>
      
    </div>
  );
};

export default WatchPage;
