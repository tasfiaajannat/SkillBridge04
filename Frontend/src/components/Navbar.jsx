import React, { useEffect } from "react";
import { useState } from "react";


function Navbar() {
    const [sticky, setSticky] = useState(false);
    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 0) {
          setSticky(true);
        } else {
          setSticky(false);
        }
      };
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
    const navItems = (
        <>
            <li><a>Home</a></li>
            <li><a>Courses</a></li>
            <li><a>About</a></li>
        </>
    );

    return (
        <>
            <div className={` max-w-screen-2xl container mx-auto md:px-20 px-4 dark:bg-slate-800 dark:text-white fixed top-0 left-0 right-0 z-50 ${
          sticky
            ? "sticky-navbar shadow-md bg-base-200 dark:bg-slate-700 dark:text-white duration-300 transition-all ease-in-out"
            : ""
        }`}
>
                <div className="navbar">
                    <div className="navbar-start flex items-center space-x-4">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h8m-8 6h16" />
                                </svg>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                {navItems}
                                <li>
                                    <label className="input input-bordered flex items-center gap-2 mt-2">
                                        <input type="text" className="grow" placeholder="Search" />
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 16 16"
                                            fill="currentColor"
                                            className="h-4 w-4 opacity-70">
                                            <path
                                                fillRule="evenodd"
                                                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                                clipRule="evenodd" />
                                        </svg>
                                    </label>
                                </li>
                            </ul>
                        </div>
                        <a className="text-2xl font-bold cursor-pointer">SkillBridge</a>
                        <div className="lg:hidden">
                            <a className="bg-black text-white px-3 py-2 rounded-md hover:bg-slate-800 duration-300 cursor-pointer ml-4">Login</a>
                        </div>
                    </div>
                    <div className="navbar-end space-x-3">
                        <div className="navbar-center hidden lg:flex">
                            <ul className="menu menu-horizontal px-1">
                                {navItems}
                            </ul>
                        </div>
                        <label className="hidden lg:flex input input-bordered flex items-center gap-2">
                            <input type="text" className="grow" placeholder="Search" style={{ width: '200px', height: '40px' }} />
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="h-4 w-4 opacity-70">
                                <path
                                    fillRule="evenodd"
                                    d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                    clipRule="evenodd" />
                            </svg>
                        </label>
                        <div className="hidden lg:block">
                            <a className="bg-black text-white px-3 py-2 rounded-md hover:bg-slate-800 duration-300 cursor-pointer">Login</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar;
