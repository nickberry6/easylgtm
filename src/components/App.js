import React from 'react'
import Header from './Header'
import Home from './Home'
import Create from './Create'
import 'bootstrap/dist/css/bootstrap.css';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const App = () => (
  <Router>
    <div>
      <Header />

      <Route exact path="/" component={Home} />
      <Route path="/create" component={Create} />
      <Route path="/memes" component={Memes} />
      <Route path="/about" component={About} />
    </div>
  </Router>
);

const About = () => <h2>About Us</h2>;
const Meme = ({ match }) => <h3>Requested Param: {match.params.id}</h3>;
const Memes = ({ match }) => (
  <div>
    <h2>Memes</h2>
    <ul>
      <li>
        <Link to={`${match.url}/all`}>All</Link>
      </li>
      <li>
        <Link to={`${match.url}/some`}>Some</Link>
      </li>
    </ul>

    <Route path={`${match.path}/:id`} component={Meme} />
    <Route
      exact
      path={match.path}
      render={() => <h3>Please select a topic.</h3>}
    />
  </div>
);


export default App;
