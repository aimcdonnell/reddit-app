import './App.css';
import NavBar from './components/NavBar/NavBar';
import Card from './components/Card/Card';

function App() {
    
  return (
    <div className="app">
      <div className="nav-bar-container">
        <NavBar/>
        <Card />
        
      </div>
    </div>
  );
}

export default App;
