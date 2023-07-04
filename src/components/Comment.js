import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io"

const Comment = ({ data, setShowComment }) => {

  const [show, setShow] = useState(false);

  const {snippet: {topLevelComment, totalReplyCount} } = data;
  const {snippet : {textDisplay, authorDisplayName, authorProfileImageUrl}} = topLevelComment;

  return (
    <div className="shadow-lg bg-gray-200 flex my-1 px-2 py-1 rounded-md">
      <div className="mt-2">
        <img
          className="w-8 mr-2 rounded-full"
          src={authorProfileImageUrl}
          alt=""
        />
      </div>
      <div className="flex flex-col">
        <div className="font-bold">{authorDisplayName}</div>
        <div>{textDisplay}</div>
        {totalReplyCount === 0 ? null : <div className = "flex hover:bg-blue-200 rounded-2xl h-7 w-24 hover:cursor-pointer text-blue-600">
          <div className = "my-auto px-1"> {show ? <div onClick = {()=>{setShow(false)
          setShowComment(false)
         }
          }><IoIosArrowUp /></div> : <div onClick = {()=>{
            setShow(true)
            setShowComment(true)
            
            
          }}><IoIosArrowDown/></div>}</div>
        <div>{replies.length}replies</div></div>}
      </div>
    </div>
  );
};

export default Comment;
