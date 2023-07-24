import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { BiSolidHome, BiLike } from "react-icons/bi";
import { PiVideoBold, PiClockCounterClockwiseBold } from "react-icons/pi";
import { LuListVideo, LuSettings } from "react-icons/lu";
import { MdVideoLibrary } from "react-icons/md";
import { HiOutlineClock, HiDownload } from "react-icons/hi";
import { SiYoutubemusic } from "react-icons/si";
import { FaUserCircle } from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";
import { TbBrandYoutubeKids } from "react-icons/tb";
import { FiFlag, FiHelpCircle } from "react-icons/fi";
import { RiFeedbackLine } from "react-icons/ri";
import { useEffect, useState} from "react";
import { toogleMenu, closeMenu } from "../utils/navSlice";

const NavBar = () => {
  const [isSideBarOpen, setSideBarOpen] = useState(window.innerWidth >= 1280); // I passed (window.innerWidth >= 1280) in initial value because if I will not pass this value then it will not work properly in first time like pass= true it will open always sidebar first time in every screen size or if I will pass false then it will always close the sidebar first time every screen size.
  const navbar = useSelector((store) => store.nav.isMenuOpen);
  const dispatch = useDispatch()

  useEffect(() => {
    const handleResize = () => {
      setSideBarOpen(window.innerWidth >= 1280)
      isSideBarOpen? dispatch(toogleMenu()) : dispatch(closeMenu())
      
    };
    
    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isSideBarOpen]);
// lg:w-[calc(100%-80%)] md:w-[calc(100%-73%)] sm:w-[calc(100%-68%)] xsm:w-[calc(100%-56%)]  mob:w-[calc(100%-50%)]
  
  return !navbar ? null : ( 
    <>
      <div className={` xl:w-1/6  lg:w-[calc(100%-80%)] bg-white font-normal z-30 xl:z-20 text-sm`}>
        <div className=" xl:w-1/6 lg:w-[calc(100%-80%)] bg-white  overflow-y-auto fixed top-14 bottom-0  ">
          <ul className="py-3">
            <li className="px-5 py-2 cursor-pointer hover:bg-gray-200 hover:rounded-lg mx-2">
              <Link to="/">
                <div className="flex items-center">
                  <div className="text-xl">
                    <BiSolidHome />
                  </div>
                  <div className="ml-5">Home</div>
                </div>
              </Link>
            </li>
            <li className="px-5 py-2 cursor-pointer hover:bg-gray-200 hover:rounded-lg mx-2">
              <div className="flex items-center">
                <div className="text-xl">
                  <LuListVideo />
                </div>
                <div className="ml-5">Shorts</div>
              </div>
            </li>
            <li className="px-5 py-2 cursor-pointer hover:bg-gray-200 hover:rounded-lg mx-2">
              <div className="flex items-center">
                <div className="text-xl">
                  <PiVideoBold />
                </div>
                <div className="ml-5">Subscriptions</div>
              </div>
            </li>
            <li className="px-5 py-2 cursor-pointer hover:bg-gray-200 hover:rounded-lg mx-2">
              <div className="flex items-center">
                <div className="text-xl">
                  <SiYoutubemusic />
                </div>
                <div className="ml-5">Youtube Music</div>
              </div>
            </li>
          </ul>
          <div className="border ml-3"></div>
          <ul className="py-3">
            <li className="px-5 py-2 cursor-pointer hover:bg-gray-200 hover:rounded-lg mx-2">
              <div className="flex items-center">
                <div className="text-xl">
                  <MdVideoLibrary />
                </div>
                <div className="ml-5">Library</div>
              </div>
            </li>
            <li className="px-5 py-2 cursor-pointer hover:bg-gray-200 hover:rounded-lg mx-2">
              <div className="flex items-center">
                <div className="text-xl">
                  <PiClockCounterClockwiseBold />
                </div>
                <div className="ml-5">History</div>
              </div>
            </li>
            <li className="px-5 py-2 cursor-pointer hover:bg-gray-200 hover:rounded-lg mx-2">
              <div className="flex items-center">
                <div className="text-xl">
                  <HiOutlineClock />
                </div>
                <div className="ml-5">Watch Later</div>
              </div>
            </li>
            <li className="px-5 py-2 cursor-pointer hover:bg-gray-200 hover:rounded-lg mx-2">
              <div className="flex items-center">
                <div className="text-xl">
                  <HiDownload />
                </div>
                <div className="ml-5">Downloads</div>
              </div>
            </li>
            <li className="px-5 py-2 cursor-pointer hover:bg-gray-200 hover:rounded-lg mx-2">
              <div className="flex items-center">
                <div className="text-xl">
                  <BiLike />
                </div>
                <div className="ml-5">Liked videos</div>
              </div>
            </li>
          </ul>
          <div className="border ml-3"></div>
          <div>
            <div className="pt-2 px-2 cursor-pointer">Subscriptions</div>
            <ul className="py-3">
              <li className="px-5 py-2 cursor-pointer hover:bg-gray-200 hover:rounded-lg mx-2">
                <div className="flex items-center">
                  <div className="text-xl">
                    <FaUserCircle />
                  </div>
                  <div className="ml-5">CarryMinati</div>
                </div>
              </li>
              <li className="px-5 py-2 cursor-pointer hover:bg-gray-200 hover:rounded-lg mx-2">
                <div className="flex items-center">
                  <div className="text-xl">
                    <FaUserCircle />
                  </div>
                  <div className="ml-5">Zee News</div>
                </div>
              </li>
              <li className="px-5 py-2 cursor-pointer hover:bg-gray-200 hover:rounded-lg mx-2">
                <div className="flex items-center">
                  <div className="text-xl">
                    <FaUserCircle />
                  </div>
                  <div className="ml-5">GoldMines</div>
                </div>
              </li>
              <li className="px-5 py-2 cursor-pointer hover:bg-gray-200 hover:rounded-lg mx-2">
                <div className="flex items-center">
                  <div className="text-xl">
                    <FaUserCircle />
                  </div>
                  <div className="ml-5">codeWithHarry</div>
                </div>
              </li>
              <li className="px-5 py-2 cursor-pointer hover:bg-gray-200 hover:rounded-lg mx-2">
                <div className="flex items-center">
                  <div className="text-xl">
                    <FaUserCircle />
                  </div>
                  <div className="ml-5">T-Series</div>
                </div>
              </li>
              <li className="px-5 py-2 cursor-pointer hover:bg-gray-200 hover:rounded-lg mx-2">
                <div className="flex items-center">
                  <div className="text-xl">
                    <FaUserCircle />
                  </div>
                  <div className="ml-5">sonyMusic</div>
                </div>
              </li>
              <li className="px-5 py-2 cursor-pointer hover:bg-gray-200 hover:rounded-lg mx-2">
                <div className="flex items-center">
                  <div className="text-xl">
                    <FaUserCircle />
                  </div>
                  <div className="ml-5">Hungama</div>
                </div>
              </li>
              <li className="px-5 py-2 cursor-pointer hover:bg-gray-200 hover:rounded-lg mx-2">
                <div className="flex items-center">
                  <div className="text-xl">
                    <FiChevronDown />
                  </div>
                  <div className="ml-5">Show 10 more</div>
                </div>
              </li>
            </ul>
          </div>
          <div className="border ml-3"></div>
          <div>
            <div className="pt-2 px-2 cursor-pointer">More From YouTube</div>
            <ul className="py-3">
              <li className="px-5 py-2 cursor-pointer hover:bg-gray-200 hover:rounded-lg mx-2">
                <div className="flex items-center">
                  <div className="text-xl text-red-600">
                    <SiYoutubemusic />
                  </div>
                  <div className="ml-5">YouTube Music</div>
                </div>
              </li>
              <li className="px-5 py-2 cursor-pointer hover:bg-gray-200 hover:rounded-lg mx-2">
                <div className="flex items-center">
                  <div className="text-xl text-red-600">
                    <TbBrandYoutubeKids />
                  </div>
                  <div className="ml-5">YouTube Kids</div>
                </div>
              </li>
            </ul>
          </div>
          <div className="border ml-3"></div>
          <ul className="py-3">
            <li className="px-5 py-2 cursor-pointer hover:bg-gray-200 hover:rounded-lg mx-2">
              <div className="flex items-center">
                <div className="text-xl">
                  <LuSettings />
                </div>
                <div className="ml-5">Settings</div>
              </div>
            </li>
            <li className="px-5 py-2 cursor-pointer hover:bg-gray-200 hover:rounded-lg mx-2">
              <div className="flex items-center">
                <div className="text-xl">
                  <FiFlag />
                </div>
                <div className="ml-5">Report history</div>
              </div>
            </li>
            <li className="px-5 py-2 cursor-pointer hover:bg-gray-200 hover:rounded-lg mx-2">
              <div className="flex items-center">
                <div className="text-xl">
                  <FiHelpCircle />
                </div>
                <div className="ml-5">Help</div>
              </div>
            </li>
            <li className="px-5 py-2 cursor-pointer hover:bg-gray-200 hover:rounded-lg mx-2">
              <div className="flex items-center">
                <div className="text-xl">
                  <RiFeedbackLine />
                </div>
                <div className="ml-5">Send feedback</div>
              </div>
            </li>
          </ul>
          <div className="border ml-3"></div>
          <div className="px-5 py-2 text-xs">
            <div>
              <div>About Press Copyright</div>
              <div>Contact us Creator Advertise</div>
              <div>Developers</div>
            </div>
            <div className="my-2">
              <div>Terms Privacy Policy & Safety</div>
              <div>How YouTube works</div>
              <div>Test new features</div>
            </div>
            <div className="mb-2">© 2023 Google LLC</div>
          </div>
        </div>
      </div>
    </> 
    
    
  );
};

export default NavBar;
