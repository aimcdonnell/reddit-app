import "./NavBar.css";
import { useState, useEffect } from "react";
import { FaReddit, FaSearch } from "react-icons/fa";

//Add Reddit logo to NavBar
//Add search functionality to Reddit app
//Using useState to know what the user has entered
//and in order to store the input
const NavBar = () => {
    const [input, setInput] = useState("");
    console.log(input);

    return(
        <>
        <div className="nav-bar">
                <FaReddit id="reddit-icon"/>
            <h1 id="nav-title">Seddit</h1>
            <div id="input-wrapper">
                <FaSearch id="search-icon"/>
                {/*onChange - Whenever the user changes the value inside input, take in the event and set the input variable
                 to the value inside the input element*/}
                <input id="search-bar" placeholder="Type to search..." type="text" onChange={(e) => setInput(e.target.value)} className="input" value={"r/pics"}/>
            </div>
        </div>

        </>
    );
};

export default NavBar;