import "./NavBar.css";
import { useState } from "react";
import { FaReddit, FaSearch } from "react-icons/fa";

//Add Reddit logo to NavBar
//Add search functionality to Reddit app
//Using useState to know what the user has entered
//and in order to store the input
const NavBar = () => {
    const [input, setInput] = useState("");
    console.log(input);
    
    //we want to fetch data every time the user inputs some text
    //the function takes in a value (the text to search for)
    const fetchData = (value) => {
        fetch("https://www.reddit.com/r/pics.json?limit=10").then((response) => response.json()).then(json => {
            console.log(json);
        });
    };
    
    //handleChange updates the state for us
    //whenever we make a change it will make a request to the fetchData API
    const handleChange = (value) => {
        setInput(value);
        fetchData(value);
    };

    return(
        <>
        <div className="nav-bar">
                <FaReddit id="reddit-icon"/>
            <h1 id="nav-title">Seddit</h1>
            <div id="input-wrapper">
                <FaSearch id="search-icon"/>
                {/*onChange - Whenever the user changes the value inside input, take in the event and set the input variable
                 to the value inside the input element*/}
                <input id="search-bar" placeholder="Type to search..." type="text" onChange={(e) => handleChange(e.target.value)} className="input" value={input}/>
            </div>
        </div>

        </>
    );
};

export default NavBar;