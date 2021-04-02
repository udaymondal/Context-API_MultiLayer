import { createContext, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Shipment from './components/Shipment/Shipment';

export const CategoryContext = createContext();

function App() {
  const [count, setCount] = useState('item');
  
  return (
    <CategoryContext.Provider value={[count, setCount]}>
      <p>(App.js) er count: {count}</p>
      <Header></Header>
      <Home count = {count}></Home>
      <Shipment />
    </CategoryContext.Provider>
  );
}

export default App;
