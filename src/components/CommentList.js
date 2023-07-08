import Comment from "./Comment";
import { useState } from "react";

const CommentList = ({ comments }) => {
  const [showComment, setShowComment] = useState(false);
  
  return (
    <div>
        {comments.map((comments)=>{
            return(
                <div key = {comments.id}>
                  <Comment data = {comments} setShowComment = {setShowComment} />
                  {/* This code is for nested comments or replies data */}
                 {/* <div key = {comments.id} className = "ml-5">
                 {showComment ? <CommentList comments = {comments?.snippet?.totalReplyCount}/> : null }
                 </div> */}
                  </div>
                
            )
        })}
    </div>
  )
}

export default CommentList