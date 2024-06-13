import './App.css';
import { useState, useEffect } from 'react';
import NavBar from './components/NavBar/NavBar';
import Card from './components/Card/Card';

const App = () => {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    //Fetching posts from Reddit
    fetch("https://www.reddit.com/r/pics.json")
    .then(response => response.json()
    .then(data => {
      console.log(data);
    }, [])
  )
  })

  return (
    <div className="app">
      <header>
        <div className="search-bar-container">
          <NavBar/>
        </div>
      </header>
      <div>
        <Card />
      </div>
    </div>
  );
}

export default App;
