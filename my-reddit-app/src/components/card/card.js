import "./Card.css";
import React, { useState, useEffect } from "react";

const Post = ({ post }) => (
    <div className="posts">
        <h2>{post.title}</h2>
        <img src={post.thumbnail} alt={post.title}/>
        <p></p>
    </div>
  )

const Card = () => {
  
  const [posts, setPosts] = useState([]);
  const [subreddit, setSubreddit] = useState("pics");

 //the useEffect() hook allows you to perform side effects, e.g. fetch data 
//every time the subreddit changes, the useEffect hook will recall
  useEffect(() => {
      
    //the first .then() waits for the response
    //the promise, triggered by .then() resolves to a response object representing the response to your request
    //promise statuses: pending, fulfilled or rejected
    //the promise only rejects if there is something wrong with the data passed into the fetch, e.g. wrong URL
    fetch(`https://www.reddit.com/r/${subreddit}.json?limit=10`).then(response => {
        //if something has gone wrong
        if (response.status !== 200) {
            console.log("Unable to fetch data from the server")
            return;
        }

    //the second .then() returns a second promise that resolves with the result of parsing
    //the response body text as JSON
        response.json().then(data => {
            if (data !== null) {
                //parsing through the Reddit data and setting articles to the array of children
                setPosts(data.data.children.map(post => post.data));
            }
        });
    })
  }, [subreddit]);



return (
    // if the posts array (data.data.children) isn't null map through the array and get the article
    <div className="posts">
        {
            posts.length > 0 ? posts.map((post, index) => <Post key={index} post={post}/>) : "No posts available"
        }
    </div>
    
)
}

export default Card;