import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    <>
      <div className = "flex z-0 ">
        <NavBar />
        <Outlet />
      </div>
    </>
  );
};

export default Body;
