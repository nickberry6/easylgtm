import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Header = () => (
  <div>
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
        <div className="container d-flex justify-content-left collapse navbar-collapse">
          <Link className="navbar-brand" to="/">Easy LGTM</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/create">Create</Link>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link" to="/memes">Memes</Link>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link" to="/about">About</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

    </header>
  </div>
);

export default Header;
