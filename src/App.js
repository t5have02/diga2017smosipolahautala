import React, { Component } from 'react';
import './App.css';
import ChartContainer from './components/ChartContainer';
import ScenarioHeading from './components/ScenarioHeading';
import MainHeading from './components/MainHeading';

class App extends Component {
  render() {
    return (
      <div className="App">
      <MainHeading />
      <ScenarioHeading />
      <ChartContainer />
      </div>
    );
  }
}

export default App;
