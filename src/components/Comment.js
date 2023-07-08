import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const Comment = ({ data, setShowComment }) => {
  const [show, setShow] = useState(false);

  const {
    snippet: { topLevelComment, totalReplyCount },
  } = data;
  const {
    snippet: { textDisplay, authorDisplayName, authorProfileImageUrl },
  } = topLevelComment;

  return (
    <div className="bg-gray-100 flex my-1 px-2 py-1 rounded-md">
      <div className="mt-2 w-1/12  flex flex-col items-center">
        <img
          className="w-8 rounded-full"
          src={authorProfileImageUrl}
          alt=""
        />
      </div>
      <div className="flex flex-col w-11/12">
        <div className="font-bold">{authorDisplayName}</div>
        <div>{textDisplay}</div>

        {/* This code  we will use when we have replies data */}

        {/* {totalReplyCount === 0 ? null : <div className = "flex hover:bg-blue-200 rounded-2xl h-7 w-24 hover:cursor-pointer text-blue-600">
          <div className = "my-auto px-1"> {show ? <div onClick = {()=>{setShow(false)
          setShowComment(false)
         }
          }><IoIosArrowUp /></div> : <div onClick = {()=>{
            setShow(true)
            setShowComment(true)
            
            
          }}><IoIosArrowDown/></div>}</div>
        <div>{totalReplyCount}replies</div>
        </div>} */}

        {/* This code is for only commentList or parent comments */}
        {totalReplyCount === 0 ? null : (
          <div className="flex hover: bg-blue-200 rounded-2xl h-7 w-28 hover:cursor-pointer text-blue-600">
            <div className="my-auto px-1">
              <IoIosArrowDown />
            </div>
            <div>{totalReplyCount} replies</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Comment;
