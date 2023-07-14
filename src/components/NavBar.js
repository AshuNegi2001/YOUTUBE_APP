import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const NavBar = () => {
  const navbar = useSelector((store) => store.nav.isMenuOpen);
  return !navbar ? null : (
    <>
      <div className="w-1/6 font-normal bg-white z-20 text-sm">
        <ul className="py-3">
          <li className="px-5 py-2 cursor-pointer hover:bg-gray-200 hover:rounded-lg">
            <Link to="/">Home</Link>
          </li>
          <li className="px-5 py-2 cursor-pointer hover:bg-gray-200 hover:rounded-lg">
            Shorts
          </li>
          <li className="px-5 py-2 cursor-pointer hover:bg-gray-200 hover:rounded-lg">
            Subscriptions
          </li>
          <li className="px-5 py-2 cursor-pointer hover:bg-gray-200 hover:rounded-lg">
            Originals
          </li>
          <li className="px-5 py-2 cursor-pointer hover:bg-gray-200 hover:rounded-lg">
            Youtube Music
          </li>
        </ul>
        <div className="border ml-3"></div>
        <ul className="py-3">
          <li className="px-5 py-2 cursor-pointer hover:bg-gray-200 hover:rounded-lg">
            Library
          </li>
          <li className="px-5 py-2 cursor-pointer hover:bg-gray-200 hover:rounded-lg">
            History
          </li>
          <li className="px-5 py-2 cursor-pointer hover:bg-gray-200 hover:rounded-lg">
            Watch Later
          </li>
          <li className="px-5 py-2 cursor-pointer hover:bg-gray-200 hover:rounded-lg">
            Dowloads
          </li>
          <li className="px-5 py-2 cursor-pointer hover:bg-gray-200 hover:rounded-lg">
            Liked Videos
          </li>
        </ul>
        <div className="border ml-3"></div>
        <div>
          <div className = "pt-2 px-2 cursor-pointer">Subscriptions</div>
          <ul className = "py-3">
            <li className = "px-5 py-2 cursor-pointer hover:bg-gray-200 hover:rounded-lg">CarryMinati</li>
            <li className = "px-5 py-2 cursor-pointer hover:bg-gray-200 hover:rounded-lg">ZeeNews</li>
            <li className = "px-5 py-2 cursor-pointer hover:bg-gray-200 hover:rounded-lg">GoldMines</li>
            <li className = "px-5 py-2 cursor-pointer hover:bg-gray-200 hover:rounded-lg">TVF</li>
            <li className = "px-5 py-2 cursor-pointer hover:bg-gray-200 hover:rounded-lg">T-series</li>
            <li className = "px-5 py-2 cursor-pointer hover:bg-gray-200 hover:rounded-lg">sonyMusic</li>
            <li className = "px-5 py-2 cursor-pointer hover:bg-gray-200 hover:rounded-lg">Hungama</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavBar;
