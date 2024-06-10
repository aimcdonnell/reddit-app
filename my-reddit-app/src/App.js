import './App.css';
import NavBar from './components/NavBar/NavBar';
import Card from './components/Card/Card';

const App = () => {

  
  return (
    <div className="app">
      <header>
        <div className="nav-bar-container">
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
