import React, {useState} from "react";
import { FaReddit, FaSearch } from "react-icons/fa";
import "./NavBar.css";
import { useDispatch } from "react-redux";
import { setFilter} from "../../store/redditSlice";

//Add search functionality to Reddit app
//Using useState to know what the user has entered
//and in order to store the input
//always put use... functions inside your components
const NavBar = () => {
  //returns a reference to the dispatch function from the Redux store
  const dispatch = useDispatch()
  

//adding state for the API request
//storing the state of the searchItem so that it can be retrieved
//even after re-renders
const [searchItem, setSearchItem] = useState('');
//adding the state to save the filtered items, and setting it to the users variable


//changing the search term whenever the user changes the text in the input field
//setting the new search term as the text in the input box
const handleInputChange = (e) => {
  const searchTerm = e.target.value;
  //you need to use the setSearchItem function to save the search term
  setSearchItem(searchTerm);
 dispatch(setFilter(searchTerm));
  
}
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
                    value={searchItem} 
                    onChange={handleInputChange}
                    />
            </div>
        </div>
    );
};

export default NavBar;