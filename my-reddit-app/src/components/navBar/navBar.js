import React, {useState, useEffect} from "react";
import { FaReddit, FaSearch } from "react-icons/fa";
import "./NavBar.css";
import { useSelector, useDispatch } from "react-redux";
import { setArticles } from "../../store/redditSlice";

//Add search functionality to Reddit app
//Using useState to know what the user has entered
//and in order to store the input
//always put use... functions inside your components
const NavBar = () => {
  //returns a reference to the dispatch function from the Redux store
  const dispatch = useDispatch()
  

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
  // fetch(`https://www.reddit.com/r/${subreddit}.json?limit=10`)
  // //save the complete list of users to the new state
  //   .then(response => response.json())
  //   .then(data => {
  //     //update the apiUsers state
  //     setApiPosts(data.data.children)
  //     console.log(data.data.children)
  //     //update the filteredUsers state
  //     setFilteredPosts(data.posts)
  //   })
}, [])

//changing the search term whenever the user changes the text in the input field
//setting the new search term as the text in the input box
const handleInputChange = (e) => {
  const searchTerm = e.target.value;
  //you need to use the setSearchItem function to save the search term
  setSearchItem(searchTerm)
 
  //CONTINUE ADDING FILTERING TO NAV BAR
//filtering the items depending on what the user is writing
//post is one element within the apiPosts array
//if the value is true then filter will return a new array containing the value, otherwise it will not
//includes returns a boolean value
//if the filter method returns true it will add the item, if it returns false it will not add the item
  const filteredItems = apiPosts.filter((post) => post.data.title.toLowerCase().includes(searchTerm.toLowerCase()));
  //and save filteredItems in your state using the setFilteredPosts function
  
  setFilteredPosts(filteredItems)
  //dispatching an action
  //tracking the change of state in redux using the setArticles action creator
  dispatch(setArticles(filteredItems))
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