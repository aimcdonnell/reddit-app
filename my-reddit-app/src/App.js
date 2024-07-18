import React, { useState, useEffect } from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Card from "./components/Card/Card";
import { useSelector } from "react-redux";
import { getPosts, fetchPosts } from "./store/redditSlice";


const App = () => {

  const posts = useSelector(getPosts)
  console.log(posts)

  //before mounting (constructing the DOM structure), the DOM calls the useEffect() hook below
  useEffect(() =>
   fetchPosts()
    , [])
 
  return (
    <div className="app">
      <header>
        <div className="search-bar-container">
        <NavBar/>
        </div>
      </header>
      <div>

        {/* {posts.map((post, index) => <Card key={index} post={post} />)} 
         <Card post={post} /> */}
      </div>
    </div>
  );
}

export default App;
