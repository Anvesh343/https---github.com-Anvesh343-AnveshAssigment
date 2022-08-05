import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import "./App.css";

import Home from "./components/Home";
import CoinsDetails from "./CoinsDetails/CryptoCurrensy";

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route exact path="/coin-id/:id" element={<CoinsDetails/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;
