import { shimmer_card_unit } from "../Constants";

const Shimmer = () => {
  return (
    <>
      <div className=" flex flex-col w-[290px] h-56 pt-3 animate-pulse mt-8">
        <div className="mx-auto w-[268px] bg-gray-300 h-48 rounded-lg"></div>
        <div className="w-full flex px-2">
          <div className="w-2/12 rounded-full my-3 mx-1 gray-200 bg-gray-200"></div>
          <div className = "w-10/12 ml-2">
            <div className="w-11/12 h-5 bg-gray-200 rounded-sm my-2 "></div>
            <div className="w-3/4 h-5 bg-gray-200 rounded-sm my-2 "></div>
          </div>
        </div>
      </div>
    </>
  );
};

const ShimmerVideoCard = () => {
  return (
    <>
      <div className = "flex flex-wrap">
        {new Array(shimmer_card_unit).fill().map((_, index)=>{
            return (
                <Shimmer key = {index}/>
            )
        })}
      </div>
    </>
  );
};

export default ShimmerVideoCard;
