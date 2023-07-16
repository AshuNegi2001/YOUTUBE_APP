import { useSelector } from "react-redux";
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

const NavBar = () => {
  const navbar = useSelector((store) => store.nav.isMenuOpen);
  return !navbar ? null : (
    <>
      <div className="w-1/6 font-normal bg-white z-20 text-sm">
        <div className="w-1/6 hover:overflow-y-auto fixed top-12 bottom-0 bg-white">
          <ul className="py-3">
            <li className="px-5 py-2 cursor-pointer hover:bg-gray-200 hover:rounded-lg">
              <Link to="/">
                <div className="flex items-center">
                  <div className="text-xl">
                    <BiSolidHome />
                  </div>
                  <div className="ml-4">Home</div>
                </div>
              </Link>
            </li>
            <li className="px-5 py-2 cursor-pointer hover:bg-gray-200 hover:rounded-lg">
              <div className="flex items-center">
                <div className="text-xl">
                  <LuListVideo />
                </div>
                <div className="ml-4">Shorts</div>
              </div>
            </li>
            <li className="px-5 py-2 cursor-pointer hover:bg-gray-200 hover:rounded-lg">
              <div className="flex items-center">
                <div className="text-xl">
                  <PiVideoBold />
                </div>
                <div className="ml-4">Subscriptions</div>
              </div>
            </li>
            <li className="px-5 py-2 cursor-pointer hover:bg-gray-200 hover:rounded-lg">
              <div className="flex items-center">
                <div className="text-xl">
                  <SiYoutubemusic />
                </div>
                <div className="ml-4">Youtube Music</div>
              </div>
            </li>
          </ul>
          <div className="border ml-3"></div>
          <ul className="py-3">
            <li className="px-5 py-2 cursor-pointer hover:bg-gray-200 hover:rounded-lg">
              <div className="flex items-center">
                <div className="text-xl">
                  <MdVideoLibrary />
                </div>
                <div className="ml-4">Library</div>
              </div>
            </li>
            <li className="px-5 py-2 cursor-pointer hover:bg-gray-200 hover:rounded-lg">
              <div className="flex items-center">
                <div className="text-xl">
                  <PiClockCounterClockwiseBold />
                </div>
                <div className="ml-4">History</div>
              </div>
            </li>
            <li className="px-5 py-2 cursor-pointer hover:bg-gray-200 hover:rounded-lg">
              <div className="flex items-center">
                <div className="text-xl">
                  <HiOutlineClock />
                </div>
                <div className="ml-4">Watch Later</div>
              </div>
            </li>
            <li className="px-5 py-2 cursor-pointer hover:bg-gray-200 hover:rounded-lg">
              <div className="flex items-center">
                <div className="text-xl">
                  <HiDownload />
                </div>
                <div className="ml-4">Downloads</div>
              </div>
            </li>
            <li className="px-5 py-2 cursor-pointer hover:bg-gray-200 hover:rounded-lg">
              <div className="flex items-center">
                <div className="text-xl">
                  <BiLike />
                </div>
                <div className="ml-4">Liked videos</div>
              </div>
            </li>
          </ul>
          <div className="border ml-3"></div>
          <div>
            <div className="pt-2 px-2 cursor-pointer">Subscriptions</div>
            <ul className="py-3">
              <li className="px-5 py-2 cursor-pointer hover:bg-gray-200 hover:rounded-lg">
                <div className="flex items-center">
                  <div className="text-xl">
                    <FaUserCircle />
                  </div>
                  <div className="mr-4"></div>CarryMinati
                </div>
              </li>
              <li className="px-5 py-2 cursor-pointer hover:bg-gray-200 hover:rounded-lg">
                <div className="flex items-center">
                  <div className="text-xl">
                    <FaUserCircle />
                  </div>
                  <div className="mr-4"></div>Zee News
                </div>
              </li>
              <li className="px-5 py-2 cursor-pointer hover:bg-gray-200 hover:rounded-lg">
                <div className="flex items-center">
                  <div className="text-xl">
                    <FaUserCircle />
                  </div>
                  <div className="mr-4"></div>GoldMines
                </div>
              </li>
              <li className="px-5 py-2 cursor-pointer hover:bg-gray-200 hover:rounded-lg">
                <div className="flex items-center">
                  <div className="text-xl">
                    <FaUserCircle />
                  </div>
                  <div className="mr-4"></div>codeWithHarry
                </div>
              </li>
              <li className="px-5 py-2 cursor-pointer hover:bg-gray-200 hover:rounded-lg">
                <div className="flex items-center">
                  <div className="text-xl">
                    <FaUserCircle />
                  </div>
                  <div className="mr-4"></div>T-Series
                </div>
              </li>
              <li className="px-5 py-2 cursor-pointer hover:bg-gray-200 hover:rounded-lg">
                <div className="flex items-center">
                  <div className="text-xl">
                    <FaUserCircle />
                  </div>
                  <div className="mr-4"></div>sonyMusic
                </div>
              </li>
              <li className="px-5 py-2 cursor-pointer hover:bg-gray-200 hover:rounded-lg">
                <div className="flex items-center">
                  <div className="text-xl">
                    <FaUserCircle />
                  </div>
                  <div className="mr-4"></div>Hungama
                </div>
              </li>
              <li className="px-5 py-2 cursor-pointer hover:bg-gray-200 hover:rounded-lg">
                <div className="flex items-center">
                  <div className="text-xl">
                    <FiChevronDown />
                  </div>
                  <div className="mr-4"></div>Show 10 more
                </div>
              </li>
            </ul>
          </div>
          <div className="border ml-3"></div>
          <div>
            <div className="pt-2 px-2 cursor-pointer">More From YouTube</div>
            <ul className="py-3">
              <li className="px-5 py-2 cursor-pointer hover:bg-gray-200 hover:rounded-lg">
                <div className="flex items-center">
                  <div className="text-xl text-red-600">
                    <SiYoutubemusic />
                  </div>
                  <div className="mr-4"></div>YouTube Music
                </div>
              </li>
              <li className="px-5 py-2 cursor-pointer hover:bg-gray-200 hover:rounded-lg">
                <div className="flex items-center">
                  <div className="text-xl text-red-600">
                    <TbBrandYoutubeKids />
                  </div>
                  <div className="mr-4"></div>YouTube Kids
                </div>
              </li>
            </ul>
          </div>
          <div className="border ml-3"></div>
          <ul className="py-3">
            <li className="px-5 py-2 cursor-pointer hover:bg-gray-200 hover:rounded-lg">
              <div className="flex items-center">
                <div className="text-xl">
                  <LuSettings />
                </div>
                <div className="mr-4"></div>Settings
              </div>
            </li>
            <li className="px-5 py-2 cursor-pointer hover:bg-gray-200 hover:rounded-lg">
              <div className="flex items-center">
                <div className="text-xl">
                  <FiFlag />
                </div>
                <div className="mr-4"></div>Report history
              </div>
            </li>
            <li className="px-5 py-2 cursor-pointer hover:bg-gray-200 hover:rounded-lg">
              <div className="flex items-center">
                <div className="text-xl">
                  <FiHelpCircle />
                </div>
                <div className="mr-4"></div>Help
              </div>
            </li>
            <li className="px-5 py-2 cursor-pointer hover:bg-gray-200 hover:rounded-lg">
              <div className="flex items-center">
                <div className="text-xl">
                  <RiFeedbackLine />
                </div>
                <div className="mr-4"></div>Send feedback
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
