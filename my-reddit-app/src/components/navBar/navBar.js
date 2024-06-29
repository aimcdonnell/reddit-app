import React, {useState, useEffect} from "react";
import { FaReddit, FaSearch } from "react-icons/fa";
import "./NavBar.css";

//Add search functionality to Reddit app
//Using useState to know what the user has entered
//and in order to store the input
const NavBar = () => {

//adding state for the API request
const [apiPosts, setApiPosts] = useState([]);
//storing the state of the searchItem so that it can be retrieved
//even after re-renders
const [searchItem, setSearchItem] = useState('');
//adding the state to save the filtered items, and setting it to the users variable 
const [filteredPosts, setFilteredPosts] = useState([]);
const [subreddit, setSubreddit] = useState("pics");

//fetch the users - useState allows us to fetch the users from the API
useEffect(() => {
  fetch(`https://www.reddit.com/r/${subreddit}.json?limit=10`)
  //save the complete list of users to the new state
    .then(response => response.json())
    .then(data => {
      //update the apiUsers state
      setApiPosts(data.posts)
      //update the filteredUsers state
      setFilteredPosts(data.posts)
    })
}, [])

//changing the search term whenever the user changes the text in the input field
//setting the new search term as the text in the input box
const handleInputChange = (e) => {
  const searchTerm = e.target.value;
  setSearchItem(searchTerm)

//filtering the items depending on what the user is writing

const filteredItems = apiPosts.filter((post) => post.title.toLowerCase().includes(searchTerm.toLowerCase())
);
//and set the result to the filtered items state
setFilteredPosts(filteredItems)
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