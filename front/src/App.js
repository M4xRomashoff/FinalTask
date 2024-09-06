
import './App.css';
import React, { useState, useEffect, useCallback } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Routes
} from "react-router-dom";

import Home from "./components/Home";
import Pets from "./components/Pets";

function App() {
  return (
      <Router>
          <div>
              <ul>
                  <li>
                      <Link to="/">Главная Страница</Link>
                  </li>
                  <li>
                      <Link to="/pets">Домашние Животные</Link>
                  </li>
              </ul>

              <hr />

              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/pets" element={<Pets />} />
              </Routes>
          </div>
      </Router>
  );
}

export default App;
