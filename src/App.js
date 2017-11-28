import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ChartContainer from './components/ChartContainer';
import ScenarioHeading from './components/ScenarioHeading';


class App extends Component {
  render() {
    return (
      <div className="App">
      <ScenarioHeading />
      <ChartContainer />
      </div>
    );
  }
}

export default App;
