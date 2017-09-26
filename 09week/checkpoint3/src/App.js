import React, { Component } from 'react';
import './App.css';
// import CreateButtons from './CreateButtons';

/* use api to get all pokemon types
map out buttons of all the pokemon types
when clicked would display a random pokemon of that type with its name and number
*/
// having trouble with the cors policy blocking request
class App extends Component {







  render() {
    return (
      <div className="App">
        <div>
          <br/>
          Pokemon Types
        </div>
        <div>
          <button type='button'>Start</button>
        </div>
      </div>
    );
  }
}

export default App;
