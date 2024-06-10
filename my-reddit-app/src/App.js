import './App.css';
import { useState, useEffect } from 'react';
import NavBar from './components/NavBar/NavBar';
import Card from './components/Card/Card';

const App = () => {
  //default values of useState() hooks are an array and hot
  //useState is an empty array
const [articles, setArticles] = useState([]);


  //every time subreddit changes, useEffect() will recall
  //running the async function after the page has loaded using the useEffect() hook
  useEffect(() => {
      fetch("https://www.reddit.com/r/pics.json?limit=10").then(response => {
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
                 setArticles(data.data.children);
                 //console.log(data.data.children);
              }
          });
      })
      //every time, subreddit changes, the useEffect() hook will recall
  }, []);
  
  return (
    <div className="app">
      <header>
        <div className="nav-bar-container">
          <NavBar/>
        </div>
      </header>
      <div className="articles">
      {/*Looping through the articles: if articles is not equal null, map through the articles array and get the article
      and index of the article. We then get the article which has a key of index. 
      Then we pass through the data of each article as a prop*/}
          {
            (articles !== null) ? articles.map((article, index) => <Card key={index} article={article.data}/>) : ''
          }
          
      </div>

    </div>
  );
}

export default App;
