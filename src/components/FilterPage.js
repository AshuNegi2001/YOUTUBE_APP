import { useSelector } from "react-redux";
import FilterCard from "./FilterCard";
import { Link } from "react-router-dom";
import ShimmerFilterCard from "./ShimmerFilterCard";

const FilterPage = () => {
  const searchVideoData = useSelector((store) => store.searchVideo);
  // console.log(searchVideoData);

  return (
    <>
      <div className="w-5/6 mt-16">
        <div className="w-3/4 mx-auto border-b">
          <div className="flex w-24 pl-2 py-1 hover:bg-gray-100 cursor-pointer hover:rounded-2xl">
            <img
              className="w-5 mr-2 py-1"
              src="https://cdn.iconscout.com/icon/free/png-256/free-filter-1634626-1389150.png"
              alt=""
            />
            <div className="">Filters</div>
          </div>
        </div>
        {searchVideoData.length === 0 ? (
          <ShimmerFilterCard />
        ) : (
          searchVideoData.map((video, index) => {
            return (
              <Link key={index} to={"/watch?v=" + video?.id?.videoId + "&c="  + video?.snippet?.channelId }>
                <FilterCard info={video}></FilterCard>
              </Link>
            );
          })
        )}
      </div>
    </>
  );
};

export default FilterPage;
