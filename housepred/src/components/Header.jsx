import React from "react";
import { Link } from "react-router-dom";
import { IoSearchSharp } from "react-icons/io5";

const Header = () => {
    return (
        <div className="bg-[#6c809a] p-4 h-[75px] flex align-bottom">
            <h1 className="font-extrabold text-3xl m-2 text-white">Diagnify</h1>
            <li className="list-none m-2 ml-[500px] text-xl font-bold mt-4 text-white">
                <Link to='/'>Home</Link>
            </li>
            <li className="list-none m-2 ml-[50px] text-xl font-bold mt-4 text-white">
                <Link to='/contact'>Contact Us</Link>
            </li>
        </div>
    );
}

export default Header;
