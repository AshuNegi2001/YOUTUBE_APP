import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";

const MainContainer = () => {
  return (
    <>
    <div className = "mx-5 w-5/6 flex-grow  overflow-y-auto ">
        <ButtonList />
        <VideoContainer />
    </div>
    </>
  )
}

export default MainContainer;