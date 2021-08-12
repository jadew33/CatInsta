import React, { Component } from "react";
import Profile from "./Profile";
import Homepage from "./Homepage";
import cats from "./seedCats.js";
import Nav from "./Nav";
import Footer from "./Footer";
import Post from "./Post";
import { Switch, Route } from "react-router-dom";
import "./styles/App.scss";

export default class App extends Component {
  render() {
    const getCat = (props) => {
      let name = props.match.params.name;
      let currentCat = cats.find(
        (cat) => cat.name.toLowerCase() === name.toLowerCase()
      );
      return <Profile cat={currentCat} />;
    };
    const getPost = (props) => {
      const { id, name } = props.match.params;
      let currentCat = cats.find(
        (cat) => cat.name.toLowerCase() === name.toLowerCase()
      );
      let currentPost = currentCat.posts.find((post) => post.id === id);
      return <Post post={currentPost} />;
    };
    return (
      <div className="app__container">
        <Nav />
        <Switch>
          <Route exact path="/:name/posts/:id" render={getPost} />
          <Route exact path="/:name" render={getCat} />
          <Route exact path="/" render={() => <Homepage />} />
        </Switch>
        <Footer />
      </div>
    );
  }
}
