import React from 'react';
import { useState } from 'react';
import './index.css';
import './creaturesData.js';
import MyButton from './components/MyButton.jsx';

function App() {
  const [cover, setCover] = useState(true);

  return (
    <>
      <MyButton />
      <div className="card-wrapper">
        <CardGen />
      </div>
    </>
  );
}

export default App;
