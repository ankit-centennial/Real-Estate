import TopBar from "../components/TopBar";
import NavBar from "../components/NavBar";
import FooterSection from "../components/FooterSection";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <TopBar />
      <NavBar />
      <Outlet />  
      <FooterSection />
    </>
  );
};

export default MainLayout;
