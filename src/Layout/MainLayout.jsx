import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";

const MainLayout = () => {
  return (
    <div className="min-h-[calc(100vh-68px)]">
      <div className=" max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4">
        <Navbar></Navbar>
      </div>
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayout;
