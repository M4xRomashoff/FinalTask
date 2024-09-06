
import './App.css';
import React, { useState, useEffect, useCallback } from "react";
import {Route, Routes,  Link,  HashRouter } from "react-router-dom";

import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <div className="mt-5 pt-2">
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />

        </Routes>
      </div>
    </div>
  );
}

export default App;
