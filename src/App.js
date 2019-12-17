import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Login from "./screen/login/login"
import Register from "./screen/register/register";
import CategoryPage from './screen/categoryPage/categoryPage'
import Home from './screen/home/home'
import Comment from './components/comment/comment'
import NewStory from './screen/newStory/newStory'
import Stats from './screen/stats/stats'
import Story from './screen/story/story'
import Profile from './components/profile/profile'
import ArticleByPerson from './screen/articleByPerson/articleByPerson'
import Bookmarks from './components/bookmarks/bookmarks'
import Follow from './components/follow/follow' 
import ArticleDetails from './screen/articleDetails/articleDetails'
import RelatedArticle from './components/relatedArticle/relatedArticle'

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
          <Route path="/articleDtails"> 
            <ArticleDetails />
          </Route>
          <Route path="/follow">
            <Follow />
          </Route>
          <Router path="/comment">
            <Comment />
          </Router>
          <Router path="/menuRouter">
            <RelatedArticle />
          </Router>
          <Router path="/profile">
            <Profile />
          </Router>
          <Router path="/newStory">
            <NewStory />
          </Router>
          <Route path="/bookmarks">
            <Bookmarks />
          </Route>
          <Route path="/articleByPerson">
            <ArticleByPerson />
          </Route>
          <Route path="/story">
            <Story />
          </Route>
          <Route path="/stats">
            <Stats />
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
