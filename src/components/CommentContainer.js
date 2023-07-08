import CommentList from "./CommentList";
import { useState, useEffect } from "react";
import { GOOGLE_API_KEY } from "../Constants";

// Dummy CommentData:
//  const commentsData = [{
//     name: "Ashu Negi",
//     message: "hi, ashu  i love your vedio",
//     replies: [{
//         name: "Ashu Negi",
//         message: "hi, ashu  i love your vedio",
//         replies: [{
//             name: "Ashu Negi",
//             message: "hi, ashu  i love your vedio",
//             replies: [{
//                 name: "Ashu Negi",
//                 message: "hi, ashu  i love your vedio",
//                 replies: [{
//                     name: "Ashu Negi",
//                     message: "hi, ashu  i love your vedio",
//                     replies: [{
//                         name: "Ashu Negi",
//                         message: "hi, ashu  i love your vedio",
//                         replies: [
                    
//                         ]
//                     },
                
//                     ]
//                 },{
//                     name: "Ashu Negi",
//                     message: "hi, ashu  i love your vedio",
//                     replies: [
                
//                     ]
//                 },
            
//                 ]
//             },
        
//             ]
//         },
    
//         ]
//     },]
// },
// {
//     name: "Ashu Negi",
//     message: "hi, ashu  i love your vedio",
//     replies: [{
//         name: "Ashu Negi",
//         message: "hi, ashu  i love your vedio",
//         replies: [{
//             name: "Ashu Negi",
//             message: "hi, ashu  i love your vedio",
//             replies: [
        
//             ]
//         },
    
//         ]
//     },
//     {
//         name: "Ashu Negi",
//         message: "hi, ashu  i love your vedio",
//         replies: [
    
//         ]
//     },
//     {
//         name: "Ashu Negi",
//         message: "hi, ashu  i love your vedio",
//         replies: [
    
//         ]
//     },]
// },
// {
//     name: "Ashu Negi",
//     message: "hi, ashu  i love your vedio",
//     replies: [{
//         name: "Ashu Negi",
//         message: "hi, ashu  i love your vedio",
//         replies: [
    
//         ]
//     },]
// },
// {
//     name: "Ashu Negi",
//     message: "hi, ashu  i love your vedio",
//     replies: [{
//         name: "Ashu Negi",
//         message: "hi, ashu  i love your vedio",
//         replies: [
    
//         ]
//     },
//     {
//         name: "Ashu Negi",
//         message: "hi, ashu  i love your vedio",
//         replies: [
    
//         ]
//     },]
// },
// {
//     name: "Ashu Negi",
//     message: "hi, ashu  i love your vedio",
//     replies: [{
//         name: "Ashu Negi",
//         message: "hi, ashu  i love your vedio",
//         replies: [
    
//         ]
//     },
//     {
//         name: "Ashu Negi",
//         replies: [
    
//         ]
//     },
//     {
//         name: "Ashu Negi",
//         message: "hi, ashu  i love your vedio",
//         replies: [
    
//         ]
//     },]
// },
// {
//     name: "Ashu Negi",
//     message: "hi, ashu  i love your vedio",
//     replies: [{
//         name: "Ashu Negi",
//         message: "hi, ashu  i love your vedio",
//         replies: [
    
//         ]
//     },]
// },
// {
//     name: "Ashu Negi",
//     message: "hi, ashu  i love your vedio",
//     replies: [{
//         name: "Ashu Negi",
//         message: "hi, ashu  i love your vedio",
//         replies: [
    
//         ]
//     },
//     {
//         name: "Ashu Negi",
//         message: "hi, ashu  i love your vedio",
//         replies: [
    
//         ]
//     },
//     {
//         name: "Ashu Negi",
//         message: "hi, ashu  i love your vedio",
//         replies: [
    
//         ]
//     },]
// },
// {
//     name: "Ashu Negi",
//     message: "hi, ashu  i love your vedio",
//     replies: [{
//         name: "Ashu Negi",
//         message: "hi, ashu  i love your vedio",
//         replies: [
    
//         ]
//     },]
// },
// {
//     name: "Ashu Negi",
//     message: "hi, ashu  i love your vedio",
//     replies: [{
//         name: "Ashu Negi",
//         message: "hi, ashu  i love your vedio",
//         replies: [
    
//         ]
//     },]
// },
// {
//     name: "Ashu Negi",
//     message: "hi, ashu  i love your vedio",
//     replies: [{
//         name: "Ashu Negi",
//         message: "hi, ashu  i love your vedio",
//         replies: [
    
//         ]
//     },
//     {
//         name: "Ashu Negi",
//         message: "hi, ashu  i love your vedio",
//         replies: [
    
//         ]
//     },]
// },
// ]

const CommentContainer = ({ videoid }) => {
    const [commentData , setCommentData] = useState([]);
    const [videoId]  = useState(videoid);

    useEffect(()=>{
        getComments();
    },[videoId])

    const getComments = async () =>{
        const data =  await fetch("https://www.googleapis.com/youtube/v3/commentThreads?key=" + GOOGLE_API_KEY  + "&textFormat=plainText&part=snippet&videoId=" + videoId);
        const json = await data.json();
        setCommentData(json.items)
        console.log(json.items);
        

    }
  return (
    <div className = "my-3 mx-2">
        <div className = "font-semibold">{commentData.length} Comments</div>
        <div className = "border"></div>
        <div><CommentList comments = {commentData} /></div>
    </div>
  )
}

export default CommentContainer;