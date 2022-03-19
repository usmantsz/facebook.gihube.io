import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { Route,Routes } from 'react-router-dom';
import Game from "./components/Game";
import Home from "./components/Home";
import Video from "./components/Video";
import Shop from "./components/Shop";

function App() {
 
  return (
    <div className="App">
      <Navbar />
      <div className="facebook">
      <Routes>
        <Route  path='/' exact element={<Home/>}></Route>
        <Route  path='/video' exact element={<Video />}> </Route>
        <Route  path='/shop' exact element={<Shop />}> </Route>
        <Route  path='/game' exact element={<Game />}> </Route>
     </Routes>
        
      </div>
    </div>
  );
}

export default App;
