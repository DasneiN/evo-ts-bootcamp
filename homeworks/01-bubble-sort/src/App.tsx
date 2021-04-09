import React, { Component } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";

import { Col } from "./typings/index";

import generateCols from "./helpers/generate_cols";
import sleep from "./helpers/sleep";

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

  async startSorting(): Promise<void> {
    const cols: Array<Col> = Array.from(this.state.cols);
    let i = 0;

    while (i < cols.length) {
      let j = i;
      cols[i].active = true;
      this.updateCols(cols);
      await sleep();

      while (j > 0) {
        if (cols[j].value <= cols[j - 1].value) {
          const temp = cols[j];
          cols[j] = cols[j - 1];
          cols[j - 1] = temp;
        } else {
          cols[j].active = false;
          this.updateCols(cols);
          break;
        }

        this.updateCols(cols);
        await sleep();
        j -= 1;
      }

      cols[0].active = false;
      this.updateCols(cols);

      i += 1;
    }
  }

  updateCols(updatedCols: Array<Col>): void {
    this.setState({
      cols: updatedCols,
    });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Main cols={this.state.cols} />
        <Footer
          reset={this.resetCols.bind(this)}
          start={this.startSorting.bind(this)}
        />
      </div>
    );
  }
}

export default App;
