import React, { useState } from 'react';


const SearchBar = () => {
    //tracking state in a function component
    const [searchInput, setSearchInput] = useState("");

    const handleChange = (e) => {
        //stops the default action of an element from happening
        e.preventDefault();
        setSearchInput(e.target.value);
    }

    return(
        <>
        <input
            type="search"
            placeholder="Search here"
            onChange={handleChange}
            value={searchInput} />
        </>
    )
}

export default SearchBar;