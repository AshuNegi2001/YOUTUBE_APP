import CommentList from "./CommentList";
import { useState, useEffect } from "react";
import { GOOGLE_API_KEY } from "../Constants";
import { useSearchParams } from "react-router-dom";

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

const CommentContainer = ( ) => {
    const [commentData , setCommentData] = useState([]);
    const [searchVedioParams] = useSearchParams();
    

    useEffect(()=>{
        getComments();
    },[searchVedioParams.get("v")])

    const getComments = async () =>{
        const data =  await fetch("https://www.googleapis.com/youtube/v3/commentThreads?key=" + GOOGLE_API_KEY  + "&textFormat=plainText&part=snippet&videoId=" + searchVedioParams.get("v"));
        const json = await data.json();
        setCommentData(json.items)
        // console.log(json.items);
        

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