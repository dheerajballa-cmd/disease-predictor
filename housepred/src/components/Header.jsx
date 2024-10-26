// Import necessary modules from React and React Router
import React from "react";
import { Link } from "react-router-dom";

// Define the Header component
const Header = () => {
    return (
        // Container for the header with a background color and flex layout
        <div className="bg-[#6c809a] p-4 h-[75px] flex align-bottom">
            {/* Main title of the application */}
            <h1 className="font-extrabold text-3xl m-2 text-white">Diagnify</h1>
            {/* Navigation links */}
            <li className="list-none m-2 ml-[500px] text-xl font-bold mt-4 text-white">
                <Link to='/'>Home</Link>
            </li>
            <li className="list-none m-2 ml-[50px] text-xl font-bold mt-4 text-white">
                <Link to='/contact'>Contact Us</Link>
            </li>
        </div>
    );
}

// Export the Header component as the default export
export default Header;
