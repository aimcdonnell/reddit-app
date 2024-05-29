import './App.css';
import SearchBar from './components/searchBar/searchBar';



function App() {
  return (
    <div className="app">
      <div className="search-bar-container">
        <SearchBar/>
      </div>
      {/*Create Search Results container*/}
      <div>
        Search Results
      </div>
      <h2>Hello World!</h2>
    </div>
  );
}

export default App;
