import React, {useState} from 'react';
import "./NavBar.css";
import { FaReddit, FaSearch } from 'react-icons/fa';

//Add Reddit logo to NavBar
//Add search functionality to Reddit app
const NavBar = () => {

const [subreddit, setSubreddit] = useState("popular");    
    return(
        <>
        <div className="nav-bar">
                <FaReddit />
            <h1 id="nav-title">Seddit</h1>
            <div id="input-bar">
                <FaSearch />
                <input type="text" className="input" value={subreddit} onChange={e => setSubreddit(e.target.value)}/>
            </div>
        </div>

        </>
    )
}

export default NavBar;