import { useState, useEffect } from "react";
import { toogleMenu } from "../utils/navSlice";
import { addData } from "../utils/searchVideoSlice";
import { useDispatch } from "react-redux";
import Suggestion from "./Suggestion";
import { useSelector } from "react-redux";
import { YOUTUBE_SEARCH_SUGGESTION_API, GOOGLE_API_KEY } from "../Constants";
import { cacheResult } from "../utils/searchSlice";
import { useNavigate } from "react-router-dom";




const Header = () => {
  const navigate = useNavigate();
  const searchCache = useSelector((store) => store.search);
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestionData, setSuggestionData] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);
  const [effectCall, setEffectCall] = useState(false);
  const [selectedQuery, setSelectedQuery] = useState("");


  // filter video:
  useEffect(() => {

    // VIDEO API CALL:
    const timer = setTimeout(()=>{
      filterVideos();
    }, 1000)
    return(
      ()=>{
        clearTimeout(timer);
      }
    )
  }, [effectCall]);

  // console.log(searchQuery);

  // Working of searchquery : first load  = clear, second type  like  `f` =  api call,  third again type `a` = clear , then api call
  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestionData(searchCache[searchQuery]);
      } else {
        // calling the API
        getSuggestion();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
      // console.log("clear");
    };
  }, [searchQuery]);

  // filter api call:
  const filterVideos = async () => {
     const data = await fetch(
      "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=" +
        searchQuery +
        "&type=video&key=" +
        GOOGLE_API_KEY
    );
    const json = await data.json();
    // console.log(json?.items);
    dispatch(addData(json?.items)) // If we want to store data into redux store which is coming from api call then we will directly dispatch that data without wrap any useState variable. and if we want to iterate that data then we will wrap that data into useState variable.
    // console.log(json?.items)
  };

  // Fetching API:
  const getSuggestion = async () => {
    const data = await fetch(YOUTUBE_SEARCH_SUGGESTION_API + searchQuery);
    const json = await data.json();
    // console.log(json[1]);
    setSuggestionData(json[1]);
    dispatch(cacheResult({ [searchQuery]: suggestionData })); // Here, I passed payload inside object because later on I have to merge this payload with previous state.
  };

  // Dispatching action
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toogleMenu());
  };

  return (
    <>
      <div className="sticky top-0 left-0 z-30 grid grid-flow-col bg-white ">
        <div className="flex col-span-1 pl-3">
          <img
            onClick={() => toggleMenuHandler()}
            className=" flex items-center h-12 pt-3 cursor-pointer"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqO0GG6zmmKmLmLZtE1q4eTVTo--4r7pYekg&usqp=CAU"
            alt="menu"
          />
          <img
            className="h-16 cursor-pointer"
            src="https://lh3.googleusercontent.com/3zkP2SYe7yYoKKe47bsNe44yTgb4Ukh__rBbwXwgkjNRe4PykGG409ozBxzxkrubV7zHKjfxq6y9ShogWtMBMPyB3jiNps91LoNH8A=s500"
            alt="logo"
          />
        </div>

        <div className="flex flex-col items-center col-span-10 justify-center">
          <div className="flex w-full justify-center">
            <img
              className="h-8 p-2 border-y border-l border-r-0 rounded-l-full"
              src="https://img.uxwing.com/wp-content/themes/uxwing/download/user-interface/search-icon.png"
              alt="search"
            />

            <input
              className="border-y w-1/2 h-8 p-1 outline-none"
              type="text"
              placeholder="Search"
              value={searchQuery}
              onFocus={() => setShowSuggestion(true)}
              onBlur={() => setShowSuggestion(false)}
              onChange={(e) => {
                setSearchQuery(e.target.value)
                
              }}
            />
             
             
             <button className="bg-gray-200 rounded-r-full border w-10">
              <img
                className="h-7 p-2"
                src="https://img.uxwing.com/wp-content/themes/uxwing/download/user-interface/search-icon.png"
                alt="search"
                onClick={() => {
                  if(searchQuery){
                    setEffectCall(!effectCall)
                    navigate("/filter")
                  }else{
                    return null;
                  }
                  
                }}
              />
            </button>
         
             
          </div>

          {showSuggestion ? (
            <div className="border w-2/5 fixed top-14 bg-white rounded-lg shadow-lg">
              {suggestionData.map((query, index) => {
                return <Suggestion key={index} info={query} />
              })}
            </div>
          ) : null}
        </div>
        <div className="flex items-center col-span-1 justify-end pr-5 py-3">
          <img
            className="h-6 "
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLofYcMFJ_UMGFVkCYeQMtcJjJE8E51M_1D4Z-gHDiNchrISGSqpj8XikDYV_VfTm0pJA&usqp=CAU"
            alt="user"
          />
        </div>
      </div>
    </>
  );
};

export default Header;

