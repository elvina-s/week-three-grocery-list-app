import './App.css';
import shopping1 from './shopping1.jpeg';
import shopping2 from './shopping2.jpeg';
import GroceryList from './GroceryList';

function App() {
  return (
    <div className="app">
      <div className="container">
        <img src={shopping1} width="300px" alt="shopping"/>
      </div>
      <div className="container">
        <h1>Grocery List</h1>
      </div>
      <div>
        <GroceryList/>
      </div>
      <div className="container">
        <img src={shopping2} width="300px" alt="shopping man"/>
      </div>
    </div>
  );
}

export default App;
