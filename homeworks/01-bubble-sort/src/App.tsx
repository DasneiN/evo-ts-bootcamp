import React, { Component } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";

import { Col } from "./typings/index";

import generateCols from "./helpers/generate_cols";

import "./App.css";

// TODO: move to methods
function startSorting(): void {
  console.log("::: startSorting");
}

type AppProps = {};
type AppState = { cols: Array<Col> };

class App extends Component<AppProps, AppState> {
  state = {
    cols: [],
  };

  componentDidMount(): void {
    this.resetCols();
  }

  resetCols(): void {
    const newCols = generateCols();

    this.setState({
      cols: newCols,
    });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Main cols={this.state.cols} />
        <Footer reset={this.resetCols.bind(this)} start={startSorting} />
      </div>
    );
  }
}

export default App;
