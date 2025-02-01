import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-gradient-to-r from-blue-900 to-indigo-200 shadow-lg p-1">
                {/* Start Section */}
                <div className="navbar-start">
                    {/* Dropdown for mobile */}
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-white p-1">
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
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-2 w-48 p-2 shadow-lg">
                            <li><NavLink to="/about" className="hover:bg-blue-200 text-base">About</NavLink></li>
                            <li><NavLink to="/travel" className="hover:bg-blue-200 text-base">Travel Insights</NavLink></li>
                            <li><NavLink to="/client" className="hover:bg-blue-200 text-base">Client List</NavLink></li>
                        </ul>
                    </div>
                    {/* Logo */}
                    <NavLink to="/" className="btn btn-ghost text-xl text-white font-bold p-1 hover:bg-blue-200 text-base">TourX</NavLink>
                </div>

                {/* Center Section */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-2 text-white space-x-4">
                        <li><NavLink to="/about" className="hover:bg-blue-200 px-3 py-1 rounded-md text-base">About</NavLink></li>
                        <li><NavLink to="/travel" className="hover:bg-blue-200 px-3 py-1 rounded-md text-base">Travel Insights</NavLink></li>
                        <li><NavLink to="/client" className="hover:bg-blue-200 px-3 py-1 rounded-md text-base">Client List</NavLink></li>
                    </ul>
                </div>

                {/* Search Box Section */}
                <div className="navbar-end">
                    <div className="flex items-center space-x-2">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="input input-bordered bg-white rounded-md px-3 py-1 text-base focus:outline-none focus:ring-2 focus:ring-blue-500 w-full max-w-xs"
                        />
                        <button
                            className="btn bg-blue-500 hover:bg-blue-600 text-white rounded-md px-3 py-1 flex items-center justify-center"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-5 h-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6M9 4a7 7 0 100 14 7 7 0 000-14z" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
