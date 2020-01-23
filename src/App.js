import React from 'react';
import ReactDOM from "react-dom";
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Register from "./Register.js";
import Dashboard from "./Dashboard.js";
import Login from "./Login.js";
function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/dashboard" component={Dashboard} />
    </div>
  );
}

export default App;
