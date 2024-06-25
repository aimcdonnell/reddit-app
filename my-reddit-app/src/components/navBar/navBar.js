import React from "react";
import { FaReddit, FaSearch } from "react-icons/fa";
import "./NavBar.css";
import { useDispatch, useSelector} from "react-redux";
import { setFilter } from "../../store/redditSlice";

//Add search functionality to Reddit app
//Using useState to know what the user has entered
//and in order to store the input
const NavBar = () => {
    //creating the search variable to store the data
    const filter = useSelector(
        (state) => state.redditArticle.searchTerm
    );
    const dispatch = useDispatch();

    //implementing filtered state 
    // the search should clear if a post does not have the title we're looking for
    return (
        
        <div className="nav-bar">
                <FaReddit id="reddit-icon"/>
            <h1 id="nav-title">Seddit</h1>
            <div id="input-wrapper">
                <FaSearch id="search-icon"/>
                {/*onChange - Whenever the user changes the value inside input, take in the event and set the input variable
                 to the value stored inside the input box which is stored inside the search variable*/}
                 
                <input 
                    id="search-bar" 
                    placeholder="Filter post by title..." 
                    type="text" className="input" 
                    value={filter} 
                    onChange={(e) => 
                    dispatch(setFilter(e.target.value))}
                    />
            </div>
        </div>
    );
};

export default NavBar;