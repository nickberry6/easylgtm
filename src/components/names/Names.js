import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class Names extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allNames: [],
      given_name: '',
      keywords: ''
    };

    this.updateGivenName = this.updateGivenName.bind(this);
    this.updateKeywords = this.updateKeywords.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.fetchAllNames();
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



  updateGivenName(event) {
    this.setState({
      given_name: event.target.value
    });
  }

  updateKeywords(event) {
    this.setState({
      keywords: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    axios
      .post('http://localhost:3000/given_names', {
        given_name: this.state.given_name,
        keywords: this.state.keywords,
        meanings: [1,2,3],
        origin: 'heaven'
      })
      .then(function(response) {
        console.log(response)
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Given Name:</label>
          <input type="text" value={this.state.given_name} onChange={this.updateGivenName} />
          <label>Keywords:</label>
          <input type="text" value={this.state.keywords} onChange={this.updateKeywords} />
          <input type="submit" value="Submit" />
        </form>
        <div>
          <ul>
            {this.state.allNames.map(p => (
              <li key={p._id.$oid}>
                {p.given_name}
                {p.keywords}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
