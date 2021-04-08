import React, { Component } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";

import CONFIG from "./config";
import generateRandomValue from "./helpers/generate_random_value";
import generateCols from "./helpers/generate_cols";

import "./App.css";

function startSorting(): void {
  console.log("::: startSorting");
}

type Col = {
  id: number;
  value: number;
};

class App extends Component<{}, { cols: Array<Col> }> {
  state = {
    cols: [],
  };

  generateCols(): void {
    const newColsLength: number = generateRandomValue(
      CONFIG.MIN_COLS,
      CONFIG.MAX_COLS
    );

    // const newCols = new Array(newColsLength).fill(null).map((cell, id) => ({ id, value: }))
    const newCols = generateCols(newColsLength);

    console.log(newCols);
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Main />
        <Footer generate={this.generateCols} start={startSorting} />
      </div>
    );
  }
}

export default App;
