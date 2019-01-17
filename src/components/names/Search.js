import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [],
      query: ''
    };

    this.updateQuery = this.updateQuery.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.setResults = this.setResults.bind(this);
  }

  componentDidMount() {
    this.fetchAllNames();
  }

  updateQuery(event) {
    this.setState({
      query: event.target.value
    });
  }

  setResults(){
    console.log("set called")
  }

  fetchAllNames() {
    fetch('http://localhost:3000/given_names')
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log(data);
        this.setState({
          allNames: data
        });
      });
  }

  handleSubmit(event) {
    event.preventDefault();

    axios({
      method: 'post',
      url: 'http://localhost:3000/search',
      params: {
        query: this.state.query
      }
    }).then(response => {

    this.setState({
      searchResults: response.data.results
    });

    }).catch(function(error) {
      console.log(error);
    });

  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Search:</label>
          <input type="text" value={this.state.query} onChange={this.updateQuery} />
          <input type="submit" value="Submit" />
        </form>
        <div>
          <ul>
            {this.state.searchResults.map(p => (
              <li key={p._id}>
              <div>{p._id}</div>
              <div>{p._score}</div>
              <div>{p._source.name}</div>
              <div>{p._source.given_name}</div>
              <div>{p.gender}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
