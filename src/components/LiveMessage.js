import { AiOutlineSend } from "react-icons/ai";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addMessage} from "../utils/chatSlice";

const LiveMessage = () =>{
    const [liveMessage, setLiveMessage] = useState("");
    const dispatch = useDispatch();
    return (<>
    <form className = "flex items-center justify-between" onSubmit={(e)=>{
        e.preventDefault();
        liveMessage.length === 0 ?  null : dispatch(addMessage({
            name : "Ashu Negi",
            message : liveMessage,
        }));
        setLiveMessage("");
    }}>
        <input className = " w-5/6 mt-2 ml-2 pl-4 pr-1 py-1  rounded-2xl focus:border focus:border-slate-400 focus:outline-none" type="text"  value = {liveMessage}  onChange = {(e)=>{
            setLiveMessage(e.target.value)
        }} placeholder = " chat.." />
        <button className = " w-1/12 text-2xl mr-2 cursor-pointer" onClick = {()=>{
            
        }}><AiOutlineSend /></button>
    </form>
    </>)
}
export default LiveMessage;
