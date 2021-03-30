import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Shipment from './components/Shipment/Shipment';

function App() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>(App.js) er count: {count}</p>
      <Header count = {count} setCount={setCount}></Header>
      <Home count = {count}></Home>
      <Shipment />
    </div>
  );
}

export default App;
