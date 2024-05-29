import React, { useState } from 'react';
import { FaSearch } from "react-icons/fa";

//Continue working on this
const SearchBar = () => {
    //tracking state in a function component
    //initial value of searchInput is an empty string
    const [input, setInput] = useState("");

    const handleChange = (value) => {
        //stops the default action of an element from happening
        e.preventDefault();
        setInput(value);
        fetchData(value);
    }

    //this asynchronous function allows us to fetch data from an external API
    const fetchData = () => {
        fetch("https://www.reddit.com/")
    }

    return(
        <div className="search-bar">
            {/*Adding a search icon to search bar */}
            <FaSearch id="search-icon"/>
        <input
            type="search"
            placeholder="Search here"
            //the value is whatever the value of the
            //input variable is
            value={input}
            //whenever the user changes the value inside
            //the input box, set the value of the input variable
            //to the value inside e.target.value
            onChange={handleChange(e.target.value)} 
            />
        </div>
    )
}

export default SearchBar;