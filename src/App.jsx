import React from 'react';
import './index.css';
import { useState } from 'react';
import creaturesData from '../creaturesData.js';
import CardGen from './components/CardGen.jsx'

function App() {
  const [veilClick, setVeil] = useState(true);
  return (
    <div className="container">
      <div className="veil" style={{display: veilClick ? 'inherit' : 'none' }}>
        <button onClick={()=> setVeil(false)} >CLick here to see the creatures!</button>
      </div>
        <div className="wrapper">
        <h1>Creatures of Eldoria</h1>
        <h2>Explore Creatures</h2>
          {creaturesData.map((item) => <CardGen key={item.id} item={item} />)}
        </div>
    </div>
  );
}

export default App;
