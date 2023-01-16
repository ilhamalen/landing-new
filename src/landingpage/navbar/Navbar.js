import React from "react";

export const Navbar = () => {
    return (
        <div className="flex w-full bg-white justify-between px-10">
            <a href="/" className="flex items-center">
                <img src="/assets/bumn_color.png" alt="BUMN" className="h-6" />
                <img src="/assets/Jasa_Raharja.png" alt="Jasa Raharja" className="" />
            </a>
            <nav className="flex items-center">
                <div>
                    <a href="/datafriends" className="mr-5 text-sm font-semibold text-blue-400  rounded-xl hover:text-gray-800">
                        Home
                    </a>
                    <a href="/laporan" className="mr-5 text-sm font-semibold text-blue-400 rounded-xl hover:text-gray-800">
                        Job Vacancies
                    </a>
                    <a href="javascript.void(0)" className="mr-5 text-sm font-semibold text-blue-400 rounded-xl hover:text-gray-800">
                        FAQ
                    </a>
                </div>
                <div className="border-l-2 px-5">
                    <button className="mr-5 text-blue-400">Sign In</button>
                    {/* <button>Register</button> */}
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
