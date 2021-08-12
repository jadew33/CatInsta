import React, { Component } from "react";
import "./styles/Post.scss";
export default class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      liked: false,
    };
    this.toggleLike = this.toggleLike.bind(this);
  }
  toggleLike() {
    this.setState({ liked: !this.state.liked });
  }
  render() {
    const { image, desc, date, likes, name } = this.props.post;
    const { liked } = this.state;

    return (
      <div className="post">
        <div className="post__text post__banner">
          <i className="fas fa-paw" />
          {name}
        </div>
        <img src={image} alt={desc} className="post__image" />
        <div className="post__text">
          <p className="post__likes">
            <i
              className={liked ? "fas fa-heart" : "far fa-heart"}
              onClick={this.toggleLike}
            />
            {likes}
          </p>
          <p className="post__description">{desc}</p>
          <p className="post__date">{date}</p>
        </div>
      </div>
    );
  }
}
