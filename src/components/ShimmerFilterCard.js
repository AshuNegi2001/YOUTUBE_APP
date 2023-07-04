import { shimmer_card_unit } from "../Constants";

const Shimmer = () => {
  return (
    <>
      <div className="w-3/4 h-52  mx-auto flex animate-pulse">
        <div className="w-1/3 p-4">
          <div className="w-full h-44  rounded-lg  bg-gray-300"></div>
        </div>
        <div className="w-2/3 pt-5 pl-5">
          <div className="bg-gray-200 w-11/12 h-6 rounded-sm"></div>
          <div className="bg-gray-200 w-1/12 h-6 rounded-sm my-2"></div>
          <div className="flex my-3">
            <div className="w-7 h-7 rounded-full bg-gray-200"></div>
            <div className="w-1/5 h-6 rounded-sm bg-gray-200 mx-3"></div>
          </div>
          <div className="w-3/4 h-5 rounded-sm bg-gray-200"></div>
        </div>
      </div>
    </>
  );
};

const ShimmerFilterCard = () => {
  return (
    <>
      <div>
        {new Array(shimmer_card_unit).fill().map((_, index) => { // this `_` is needed because if we will not pass this `_` then, it will show error  to us that key should be unique.
          return <Shimmer key={index} />;
        })}
      </div>
    </>
  );
};

export default ShimmerFilterCard;
