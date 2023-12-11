import { Outlet } from "react-router-dom";
import MainNav from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

const MainLayout = () => {
  return (
    <div className="bg-[#252734]">
      <header className="bg-[#252734]">
        <MainNav></MainNav>
      </header>
      <main>
        <Outlet></Outlet>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
