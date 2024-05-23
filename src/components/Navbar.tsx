import { Link, NavLink } from "react-router-dom";
import logo from "../assets/shared/logo.svg";
import { link } from "./index.ts";
import { useState } from "react";
import open from "../assets/shared/icon-hamburger.svg";
import close from "../assets/shared/icon-close.svg";
export default function Navbar() {
  const [ismobile, setisMobile] = useState<boolean>(false);
  function handClick() {
    setisMobile(!ismobile);
  }
  return (
    <header className="w-full bg-transparent  py-5 px-10 lg:px-0   flex items-center justify-between absolute mt-5 lg:mt-10 z-10">
      {/* Creating circle for logo */}
      <div className="w-[50px] h-[50px] rounded-full bg-white flex items-center justify-center ml-0 lg:ml-5 cursor-pointer">
        <Link to='/'>
        
        <img src={logo} alt="logo-img" className="w-[100px]" />
        </Link>
      </div>
      {/* Navbar */}
      <div className="hidden lg:flex items-center">
        <div className="w-[500px] h-[1px] bg-gray-600"></div>
        <nav className="w-[70%] h-[100px] backdrop-blur-[10px] bg-white-alpha-16 flex items-center px-5 gap-3 uppercase"
        
        >
          {link.map((nav) => (
            <NavLink
              key={nav.id}
              to={nav.path}
              className={({ isActive }) =>
                `text-2xl text-white relative ${
                  isActive
                    ? "after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-white after:left-0 after:bottom-[-35px]"
                    : ""
                }`
              }
             
            >
              {nav.name}
            </NavLink>
          ))}
        </nav>
      </div>
      {/* {toggle buton} */}
      <div onClick={handClick} className="block lg:hidden z-10">
        {!ismobile ? (
          <img
            src={open}
            alt="open-hamburger "
            className="w-[40px] object-cover"
          />
        ) : (
          <img src={close} alt=" " className="w-[40px] object-cover" />
        )}
      </div>

      {/* {mobile display} */}
      <div className={`${ismobile ? 'translate-x-0' : 'translate-x-full'}
       fixed top-0 right-0 w-[300px] h-screen backdrop-blur-[20px] bg-white-alpha-16 transition-transform duration-300`}>
      <nav className="flex flex-col mt-[100px] uppercase">
          {link.map((nav) => (
            <NavLink
              key={nav.path}
              to={nav.path}
              className ='text-2xl text-white relative pt-[50px] px-5'
              onClick={handClick}
              >
              {nav.name}
            </NavLink>
          ))}
        </nav>

      </div>
    </header>
  );
}
