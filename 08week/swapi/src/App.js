import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: null
    }
  }

  componentDidMount(){
    fetch('https://swapi.co/api/species/?page=1')
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({data: responseJson.results})
      return responseJson;
    })
    .catch((error) => {
      console.error(error);
    });
  }


  render() {
    console.log(this.state.data);
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Starwars Species</h2>
          <h3>{this.state.data}</h3>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
