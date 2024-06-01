import './App.css';
import { useState, useEffect } from 'react';
import NavBar from './components/NavBar/NavBar';
import Card from './components/Card/Card';

function App() {
  //default values of useState() hooks are an array and hot
  const [posts, setPosts] = useState([]);
  const [subreddit, setSubreddit] = useState("hot");

  //every time subreddit changes, useEffect() will recall
  useEffect(() => {
      fetch("https://www.reddit.com/hot.json?limit=10").then(response => {
          if (response.status !== 200) {
              console.log("Error!")
              //return out of the function
              return;
          }
          //parse the response from the server through JSON
          //this returns a promise so we have to call .then()
          response.json().then(data => {
              if (data !== null) {
                  //setting posts equal to the array of children
                 setPosts(data.data.children);
                 console.log(data.data.children);
              }
          });
      })
  }, [subreddit]);
  
  return (
    <div className="app">
      <header>
        <div className="nav-bar-container">
          <NavBar/> 
        </div>
      </header>
      <div className="posts">
      {/*Looping through the articles: if posts is not equal null, map through the posts array and get the post
      and index of the post. We then get the post which has a key of index. 
      Then we pass through the data of each post as a prop*/}
          {
            (posts !== null) ? posts.map((post, index) => <Card key={index} post={post.data}/>) : ''
          }
          
      </div>

    </div>
  );
}

export default App;
