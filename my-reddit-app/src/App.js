import React, { useState, useEffect } from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Card from "./components/Card/Card";
import { useSelector } from "react-redux";


const App = () => {

  const posts = useSelector((state) => state.redditArticles)
  console.log(posts)
 
  return (
    <div className="app">
      <header>
        <div className="search-bar-container">
        <NavBar/>
        </div>
      </header>
      <div>

        {/* {posts.map((post, index) => <Card key={index} post={post} />)} */}
        {/* <Card post={post} /> */}
      </div>
    </div>
  );
}

export default App;
