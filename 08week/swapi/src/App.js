import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: []
    }
  }

  componentDidMount(){
    fetch('https://swapi.co/api/species/?page=1')
    .then((response) => {
      if (!response.ok) {
        throw Error("Network request failed"); // Throw error
      }
      return response
    })
    .then((response) => response.json())
    .then((responseJson) => {
      console.log(responseJson, ' responseJson');
      return this.setState({data: responseJson.results})
    })
    .catch((error) => {
      console.error(error);
    });

  }


  render() {
    // console.log(this.state.data[0]);
    const people = this.state.data.map(person => {
      return <div style={{
          color: 'black',
          marginTop: 10,
      }}>{person.name}<br></br>{person.average_lifespan} years</div>
    })
    return (
      <div className="App">
          <h1>Starwars Species</h1>
          <h2>{people}</h2>
      </div>
    );
  }
}

export default App;
