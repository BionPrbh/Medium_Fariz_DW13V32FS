import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Login from "./components/login/login"
import Register from "./components/register/register";
import Home from './components/home/home'

function App() {
  return (
    <div>
      <Router>
        <Switch >
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/"> 
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
