import React from "react";
import { FaReddit } from "react-icons/fa";
import "./NavBar.css";

//Add search functionality to Reddit app
//Using useState to know what the user has entered
//and in order to store the input
const NavBar = () => {
    return (
        <div className="nav-bar">
                <FaReddit id="reddit-icon"/>
            <h1 id="nav-title">Seddit</h1>
        </div>
    );
};

export default NavBar;