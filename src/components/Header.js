import { useState, useEffect } from "react";
import { toogleMenu } from "../utils/navSlice";
import { addData } from "../utils/searchVideoSlice";
import { useDispatch } from "react-redux";
import Suggestion from "./Suggestion";
import { useSelector } from "react-redux";
import { YOUTUBE_SEARCH_SUGGESTION_API, GOOGLE_API_KEY } from "../Constants";
import { cacheResult } from "../utils/searchSlice";
import { useNavigate } from "react-router-dom";
import { GoSearch } from "react-icons/go";
import youtubeLogo from "../assets/images/youtubeLogo.svg";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaUserCircle } from "react-icons/fa";

const Header = () => {
  const navigate = useNavigate();
  const searchCache = useSelector((store) => store.search);
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestionData, setSuggestionData] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);
  const [effectCall, setEffectCall] = useState(false);
  const [showSearchIcon, setShowSearchIcon] = useState(false);

  // filter video:
  useEffect(() => {
    // VIDEO API CALL:
    const timer = setTimeout(() => {
      filterVideos();
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
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
    try {
      const data = await fetch(
        "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=" +
          searchQuery +
          "&type=video&key=" +
          GOOGLE_API_KEY
      );
      const json = await data.json();
      // console.log(json?.items);
      dispatch(addData(json?.items)); // If we want to store data into redux store which is coming from api call then we will directly dispatch that data without wrap any useState variable. and if we want to iterate that data then we will wrap that data into useState variable.
      // console.log(json?.items)
    } catch (error) {
      console.log(error);
    }
  };

  // Fetching API:
  const getSuggestion = async () => {
    try {
      const data = await fetch(YOUTUBE_SEARCH_SUGGESTION_API + searchQuery);
      const json = await data.json();
      // console.log(json[1]);
      setSuggestionData(json[1]);
      dispatch(cacheResult({ [searchQuery]: suggestionData })); // Here, I passed payload inside object because later on I have to merge this payload with previous state.
    } catch (error) {
      console.log(error);
    }
  };

  // Dispatching action
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toogleMenu());
  };

  return (
    <>
      <div className="fixed top-0 left-0 z-30 flex  md:w-[calc(100%-15px)] sm:w-[calc(100%-13px)] xsm:w-[calc(100%-11px)] w-[calc(100%-9px)] bg-white justify-evenly h-14 ">
        <div className=" flex  lg:2/12 md:w-3/12 w-4/12 ">
          <div
            className=" flex items-center text-2xl px-1 my-2 cursor-pointer hover:rounded-full hover:bg-gray-200"
            onClick={() => toggleMenuHandler()}
          ><RxHamburgerMenu /></div>
          <img
            className=" h-14 w-32 cursor-pointer"
            src={youtubeLogo}
            alt="logo"
          />
        </div>

        <div className="flex flex-col md:w-7/12 w-6/12  items-center justify-center xsm:ml-0 ml-5">
          <div className="flex w-full xsm:justify-center justify-start ">
            <div className = "sm:w-1/2 xsm:w-3/5 w-4/5 flex">
            {!showSearchIcon ? null : <div className="h-8 p-2 border-y border-l border-r-none rounded-l-full focus:border-r-none focus:roun"><GoSearch />
              </div>}

            <input
              className="border w-full  h-8 py-1 pl-3  outline-none rounded-l-full focus:rounded-l-none focus:border-l-0 focus:pl-1" onClick = {()=>{setShowSearchIcon(true)}}
              type="text"
              placeholder="Search"
              value={searchQuery}
              onBlur={() => {
                setShowSuggestion(false);
                setShowSearchIcon(false)
              }}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setShowSuggestion(true)
              }}
            />
            </div>

            <button className="bg-gray-200 rounded-r-full border w-10 h-8 p-2" onClick={() => {
                  if (searchQuery) {
                    setEffectCall(!effectCall);
                    navigate("/filter");
                  } else {
                    return null;
                  }
                }}>
              <GoSearch />
            </button>
          </div>

          {showSuggestion ? (
            <div className="border w-2/5 fixed top-14 bg-white rounded-lg shadow-lg">
              {suggestionData.map((query, index) => {
                return <Suggestion key={index} info={query} />;
              })}
            </div>
          ) : null}
        </div>
        <div className=" flex items-center w-1/12 justify-end xsm:pr-3 pr-1 py-3">
        <div className = "text-3xl"><FaUserCircle/></div>
        </div>
      </div>
    </>
  );
};

export default Header;
