import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./styles/Partials.scss";
export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <NavLink exact to="/" className="footer__link">
          <i className="fas fa-home footer__icon"></i>
        </NavLink>
        <i className="fas fa-comment-dots footer__icon"></i>
        <i className="fas fa-heart footer__icon"></i>
        <NavLink exact to="/milky">
          <i className="fas fa-cat footer__icon"></i>
        </NavLink>
      </div>
    );
  }
}
