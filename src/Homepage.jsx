import React, { Component } from "react";
import "./styles/Homepage.scss";
import posts from "./seedHomepage.js";
import Post from "./Post";
export default class Homepage extends Component {
  render() {
    return (
      <div className="homepage">
        {posts.map((post) => (
          <Post post={post} key={post.image} />
        ))}
      </div>
    );
  }
}
