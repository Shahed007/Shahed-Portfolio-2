import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { Link, NavLink } from "react-router-dom";

function NavList() {
  return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography as="li" variant="small" className="p-1 font-medium">
        <NavLink
          to="/"
          className="flex items-center hover:text-blue-500 transition-colors"
        >
          Home
        </NavLink>
      </Typography>
      <Typography as="li" variant="small" className="p-1 font-medium">
        <NavLink
          to="/about-me"
          className="flex items-center hover:text-blue-500 transition-colors"
        >
          About Me
        </NavLink>
      </Typography>
      <Typography as="li" variant="small" className="p-1 font-medium">
        <NavLink
          to="/contact-me"
          className="flex items-center hover:text-blue-500 transition-colors"
        >
          Contact Me
        </NavLink>
      </Typography>
    </ul>
  );
}

const MainNav = () => {
  const [openNav, setOpenNav] = React.useState(false);

  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <Navbar className="mx-auto max-w-7xl  bg-[#252734] backdrop-saturate-0 backdrop-blur-0 border-0    px-6 py-3 bg-opacity-0">
      <div className="flex items-center justify-between ">
        <Typography
          href="#"
          variant="h6"
          className="mr-4 cursor-pointer py-1.5"
        >
          <Link to="/">MD SHAHED</Link>
        </Typography>
        <div className="hidden lg:block text-white">
          <NavList />
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </Navbar>
  );
};

export default MainNav;
