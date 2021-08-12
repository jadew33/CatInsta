import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./styles/Profile.scss";

export default class Profile extends Component {
  render() {
    const { image, name, desc, servant, posts, emoji } = this.props.cat;
    return (
      <div>
        <div className="banner">
          <img src={image} className="banner__image" alt="profile" />
          <div className="banner__text">
            <h2>
              {name}
              {emoji}
            </h2>
            <p>{desc}</p>
            <p>Servant: {servant}</p>
          </div>
        </div>
        <div className="grid__container">
          {posts.map((post) => (
            <span className="grid__item" key={post.image}>
              <Link to={`/milky/posts/${post.id}`}>
                <img
                  src={post.image}
                  className="grid__post"
                  alt="profile posts"
                />
              </Link>
            </span>
          ))}
        </div>
      </div>
    );
  }
}
