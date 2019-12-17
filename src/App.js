import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
// import Login from "./screen/login/login"
// import Register from "./screen/register/register";
// import CategoryPage from './screen/categoryPage/categoryPage'
// import Home from './screen/home/home'
// import ArticleDetails from './screen/articleDetails/articleDetails'
// import Comment from './screen/comment/comment'
// import NewStory from './screen/newStory/newStory'
// import Stats from './screen/stats/stats'
// import Story from './screen/story/story'
// import Profile from './screen/profile/profile' 
// import ArticleByPerson from './screen/articleByPerson/articleByPerson'
// import Bookmarks from './screen/bookmarks/bookmarks'

import ArticleDetails from './screen/article/articleDetails'

function App() {
  return (
    <div>
      <Router>
        <Switch >
          {/* <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/categoryPage">
            <CategoryPage />
          </Route> */}
          <Route path="/"> 
            <ArticleDetails />
            {/* <Home /> */}
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
