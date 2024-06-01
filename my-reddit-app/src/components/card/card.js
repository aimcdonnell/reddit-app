import React, { useState, useEffect } from "react";
import "./Card.css";
//import { getSubredditPosts } from "../api/api";

const Card = () => {

    const [posts, setPosts] = useState([]);
    const [subreddit, setSubreddit] = useState('webdev');

    //if subreddit changes, useEffect() will recall
    useEffect(() => {
        fetch("https://www.reddit.com/hot.json?limit=10").then((response) => {
            if (response.status !== 200) {
                console.log("Error!")
                //return out of the function
                return;
            }
            //parse the response from the server through JSON
            //this returns a promise so we have to call .then()
            response.json().then(data => {
                if (data !== null) {
                    //setting articles equal to the array of children
                   setPosts(data.data.children); 
                }
            });
        })
    }, [subreddit]);
    
    return (
        <div className="reddit-post">
            <h2>Title</h2>
        </div>
    )
}

export default Card;