import React, { useState } from 'react';
import { FaSearch } from "react-icons/fa";

//Continue working on this
const SearchBar = () => {
    //tracking state in a function component
    //initial value of searchInput is an empty string
    const [retrievedData, setRetrievedData] = useState([]);


    //this asynchronous function allows us to fetch data from an external API
    //response waits for the results of the fetchData function and performs actions on it
    //converting response into JSON format so that it can be read by JavaScript
    const runSearch = async() => {
        const searchInput = document.getElementById("search-input").value;
        const searchUrl = "https://www.reddit.com/r/" + searchInput + "/hot/.json?limit=10";
        const response = await fetch(searchUrl);
        const redditResponse = await response.json();
        if (redditResponse.data.children && redditResponse.response.data.children.length) {
            setRetrievedData(redditResponse.data.children);
        }
    }

    return(
        <div className="search-input">
            {/*Adding a search icon to search bar */}
            <FaSearch id="search-icon"/>
        <input
            type="search"
            placeholder="Search for a subreddit here..."
            //whenever the user changes the value inside
            //the input box, set the value of the input variable
            //to the value inside e.target.value
            onChange={runSearch}
            />
            <div>
                {
                    retrievedData.map((children, index) => {
                        return (
                                <div ley={children.data.author + index}>
                                    <div>Kind: { children.kind } </div>
                                    <div>Author: { children.data.author }</div>
                                    <div>Title: { children.data.title }</div>
                                </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default SearchBar;