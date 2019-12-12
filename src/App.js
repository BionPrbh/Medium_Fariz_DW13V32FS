import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Login from "./screen/login/login"
import Register from "./screen/register/register";
import CategoryPage from './screen/categoryPage/categoryPage'
import Home from './screen/home/home'

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
          <Route path="/categoryPage">
            <CategoryPage />
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
