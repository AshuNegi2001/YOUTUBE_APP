import { FaUserCircle } from "react-icons/fa";

const LiveComment = ({ name, message }) => {
  return (
    <>
      <div className="flex  px-2 py-1">
        <div className="rounded-full w-8 mr-2">
          <div className="text-2xl">
            <FaUserCircle />
          </div>
        </div>
        <div className="font-bold mr-3">{name}</div>
        <div className="">{message}</div>
      </div>
    </>
  );
};

export default LiveComment;
