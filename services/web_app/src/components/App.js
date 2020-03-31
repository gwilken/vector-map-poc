import React from 'react';
import SelectStyle from './SelectStyle'
import SelectLayerColor from './SelectLayerColor'
import Map from './Map'
import '../styles/App.css';

function App() {
  return (
    <div className="App">
      <div className="map-container">
        <SelectStyle />
        <SelectLayerColor />
        <Map />
      </div>
    </div>
  );
}

export default App;
