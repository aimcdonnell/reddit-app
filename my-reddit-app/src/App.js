import React, { useState, useEffect } from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Card from "./components/Card/Card";
import { getPosts, fetchPosts, getPostsStatus } from "./store/redditSlice";
import { useDispatch, useSelector } from "react-redux";


const App = () => {
  const dispatch= useDispatch()
  const posts = useSelector(getPosts)
  const status = useSelector(getPostsStatus)
  
console.log(status)
  console.log(posts)

  //before mounting (constructing the DOM structure), the DOM calls the useEffect() hook below
  useEffect(() => {
    
    if (status === "idle") {
      console.log("useEffect")
    dispatch(fetchPosts())
    }
  
  }, [status, dispatch])
 
  return (
    <div className="app">
      <header>
        <div className="search-bar-container">
        <NavBar/>
        </div>
      </header>
      <div>

        {/* {posts.map((post, index) => <Card key={index} status={status} post={post} />)}  */}
         <Card posts={posts} />
      </div>
    </div>
  );
}

export default App;
