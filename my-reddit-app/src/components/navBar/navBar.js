import "./NavBar.css";
import { useState } from "react";
import { FaReddit, FaSearch } from "react-icons/fa";

//Add Reddit logo to NavBar
//Add search functionality to Reddit app - I need to add Redux first to maintain state
const NavBar = () => {
    const [search, setSearch] = useState("");
    console.log(search);
    
    
    return(
        <>
        <div className="nav-bar">
                <FaReddit />
            <h1 id="nav-title">Seddit</h1>
            <div id="input-bar">
                <FaSearch />
                <input type="text" onChange={(e) => setSearch(e.target.value)} className="input" value={search}/>
            </div>
        </div>

        </>
    )
}

export default NavBar;