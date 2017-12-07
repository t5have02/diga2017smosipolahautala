import React, { Component } from "react";
import MainContainer from "./components/Main/MainContainer";
import DataHandler from "./data/DataHandler";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

class App extends Component {

  //Constructor
  constructor(props) {
    super(props);

    this.state = {
      areaLevelData: [],
      areaLevelSelected: "Valitse aluetaso",
      areaData: [],
      areaSelected: "Valitse alue",
      scenarioData : [],
      scenarioSelected:"Valitse skenaario",
      AreaLevelID:1,
      AreaID:2,
      isAreaLevelSelected : false,
      isAreaSelected : false
    };

    this.AreaLevelSelectionClicked = this.AreaLevelSelectionClicked.bind(this);
    this.AreaSelectionClicked = this.AreaSelectionClicked.bind(this);
    this.ScenarioSelectionClicked = this.ScenarioSelectionClicked.bind(this);

  }

  //Lifecycle methods

  componentDidMount() {

    DataHandler.getAreaLevelData()
      .then(areaLevelData => {
        this.setState({ areaLevelData: areaLevelData });
      })
      .catch(error => {
        console.log("Failed", error);
      });


  }

  //Functions
  AreaLevelSelectionClicked(AreaLevel) {

    this.setState({areaLevelSelected:AreaLevel.name});
  
    if(AreaLevel.name==="Maakunnat"){

      DataHandler.getAreaData(this.state.AreaLevelID)
      .then(areaData => {
        this.setState({ areaData: areaData });
      })
      .catch(error => {
        console.log("Failed", error);
      });
    } else{

      DataHandler.getAreaData(this.state.AreaID)
      .then(areaData => {
        this.setState({ areaData: areaData });
      })
      .catch(error => {
        console.log("Failed", error);
      });
    }
  }

  AreaSelectionClicked(Area){

    this.setState({areaSelected:Area.name});
    for(var i =0; i < this.state.areaData.length;i++){

        if(this.state.areaData[i].name===Area.name){

          this.setState({scenarioData:this.state.areaData[i].scenarioCollections});
        
        }
    }
  }

  ScenarioSelectionClicked(Scenario){
    
        this.setState({scenarioSelected:Scenario.name});
  }

  //Render

  render() {
    return (
      <div className="App">
        <MainContainer
          AreaLevelSelectionClicked={this.AreaLevelSelectionClicked}
          AreaLevelData={this.state.areaLevelData}
          AreaLevelSelected = {this.state.areaLevelSelected}
          AreaData = {this.state.areaData}
          AreaSelectionClicked = {this.AreaSelectionClicked}
          AreaSelected ={this.state.areaSelected}
          ScenarioData = {this.state.scenarioData}
          ScenarioSelectionClicked = {this.ScenarioSelectionClicked}
          ScenarioSelected = {this.state.scenarioSelected}
        />
      </div>
    );
  }
}

export default App;
