import React from "react";
import { Link } from "react-router-dom";


export const Navbar = () => {

    return (
        <div className="flex w-full bg-white justify-between px-10">
            <a href="/" className="flex items-center">
                <img src="/assets/bumn_color.png" alt="BUMN" className="h-6" />
                <img src="/assets/Jasa_Raharja.png" alt="Jasa Raharja" className="" />
            </a>
            <nav className="flex items-center">
                <div>
                    <a href="/Home" className="mr-5 text-sm font-semibold text-blue-400  rounded-xl hover:text-blue-500">
                        Home
                    </a>
                    <a href="/Job" className="mr-5 text-sm font-semibold text-blue-400 rounded-xl hover:text-blue-500">
                        Job Vacancies
                    </a>
                    <a href="FAQ" className="mr-5 text-sm font-semibold text-blue-400 rounded-xl hover:text-blue-500">
                        FAQ
                    </a>
                </div>
                <div className="border-l-2 px-5">
                    <Link to="/Login">
                        <button className="mr-5 text-blue-400 rounded-xl hover:text-blue-500">Sign In</button>
                    </Link>
                    <Link to="/Register">
                        <button className="mr-5 text-blue-400 rounded-xl hover:text-blue-500">Register</button>
                    </Link>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
