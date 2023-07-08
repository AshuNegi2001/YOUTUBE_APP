import { BsChevronDown } from "react-icons/bs";
import LiveComment from "./LiveComment";
import LiveMessage from "./LiveMessage";
import { generateRandomName, generateRandomMessage } from "../utils/helper.js";
import { addMessage } from "../utils/chatSlice";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const LiveChat = () => {
  const liveComments = useSelector((store) => store.chat.messages);

  const [hideChat, setHideChat] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    const i = setInterval(() => {
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: generateRandomMessage(),
        })
      );
    }, 1000);
    return () => {
      clearInterval(i);
    };
  }, []);

  return (
    <>
      {hideChat ? (
        <div className = "bg-gray-50 border h-[600px] rounded-lg shadow-lg">
          <div className="flex p-3">
            <div className="text-base">Top chat</div>
            <div className="flex items-center px-1 cursor-pointer">
              <BsChevronDown />
            </div>
          </div>
          <div className="border"></div>
          <div className=" flex flex-col-reverse h-[450px] overflow-y-scroll">
            {liveComments.map((c, index) => {
              return (
                <LiveComment key={index} name={c.name} message={c.message} />
              );
            })}
          </div>
          <div className="border"></div>
          <div className = "mb-2">
            <LiveMessage />
          </div>
          <div className="border"></div>
          <div className = "flex justify-center my-2"><button  className = " w-11/12 my-auto hover:rounded-lg p-1 items-center hover:bg-slate-100 " onClick={() => setHideChat(!hideChat)}>Hide chat</button>
        </div></div>
      ) : (
        <div className = "h-[50px] w-full flex justify-center"><button  className = " rounded-lg hover:bg-slate-100 w-11/12 p-1  my-2" onClick={() => setHideChat(!hideChat)}>Show chat</button></div>
      )}
    </>
  );
};
export default LiveChat;
