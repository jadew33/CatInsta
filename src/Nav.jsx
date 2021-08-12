import React, { Component } from "react";
import "./styles/Partials.scss";
export default class Nav extends Component {
  render() {
    return (
      <div className="nav">
        <>
          <h1 className="nav__title">KittyGram </h1>
          <i className="fas fa-paw nav__icon" />
        </>
      </div>
    );
  }
}
