import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";


const MainContainer = () => {
  return (
    <>
    <div className = {`mx-5 xl:w-5/6 w-full xl:static absolute  `}>
        <ButtonList />
        <VideoContainer />
    </div>
    </>
  )
}

export default MainContainer;