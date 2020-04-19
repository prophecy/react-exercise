import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/navbar";
import Counters from "./components/counters";

class App extends Component {
  state = {
    totalCounters: 0,
  };

  render() {
    return (
      <React.Fragment>
        {/*<NavBar totalCounters={this.state.totalCounters} />*/}
        <main className="container">
          <Counters onChangedTotalCounter={this.handleTotalCounters} />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
