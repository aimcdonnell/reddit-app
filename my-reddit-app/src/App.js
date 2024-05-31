import './App.css';
import NavBar from './components/navBar/navBar';
import Post from './components/post/post';



function App() {
  return (
    <div className="app">
      <div className="nav-bar-container">
        <NavBar/>
        <Post/>
      </div>
    </div>
  );
}

export default App;
