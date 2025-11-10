import React from 'react';
import './index.css';
import { useState } from 'react';
import creaturesData from '../creaturesData.js';
import MyButton from './components/MyButton.jsx';

function App() {
  const [veil, setVeil] = useState(true);
  return (
    <>
      <h1>Creature Card Generator</h1>
      <MyButton veil={veil} setVeil={setVeil} />
      <div className="card-wrapper" style={{ display: veil ? 'none' : 'block' }}>
        {creaturesData.map((item) => <CardGen key={item.id} item={item} />)}
      </div>
    </>
  );
}

export default App;
