import VideoDetail from "./VideoDetail";
import VideoDescription from "./VideoDescription";


const VideoInfo = ({channelId}) =>{
    return(
        <>
        <div className = "my-4 ">
            <div><VideoDetail channelId = {channelId}/></div>
            <div><VideoDescription /></div>
        </div>
        </>
    )
}

export default VideoInfo;