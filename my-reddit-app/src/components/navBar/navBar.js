import React from 'react';
import "../../App"
import "./NavBar.css";

//Add Reddit logo to NavBar
//Add search functionality to Reddit app
const NavBar = (props) => {

    return(
        <>
        <div className="nav-bar">
            <h1 id="nav-title">Seddit</h1>
            <div id="input-bar">
                <input type="text" className="input" value={subreddit} onChange={e => setArticles(e.target.value)}/>
            </div>
        </div>

        </>
    )
}

export default NavBar;