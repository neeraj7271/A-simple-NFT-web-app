import React from 'react';
import './App.css';
import Home from './components/Home';
import {BrowserRouter, Route, Routes, Link} from "react-router-dom";
import AfterMint from './components/AfterMint';
import ConnectAfterMint from './components/ConnectAfterMint';
import AfterStake from "./components/AfterStake";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="mint/*" element={<AfterMint />}/>
            <Route path="connectmint/*" element={<ConnectAfterMint />} />
            <Route path="stake/*" element={<AfterStake />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
