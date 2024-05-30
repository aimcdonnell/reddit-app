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
    //WORK ON .VALUE ERROR BELOW
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
            placeholder="Search for a subreddit..."
            onChange={runSearch}
            />
            <div>
                {
                    retrievedData.map((children, index) => {
                        return (
                                <div key={ children.data.author + index }>
                                    <div>Kind: { children.kind } </div>
                                    <div>Author: { children.data.author_fullname }</div>
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