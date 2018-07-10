import React from 'react';
import Nav from "./components/Nav";
import SearchBar from "./components/SearchBar";
import { BrowserRouter as Router, Route } from "react-router-dom";
const App = () => (
  <Router>
    <div>
      <Nav />
      <SearchBar />
    </div>
  </Router>
);

export default App;