import React, { Component } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";

import { Col } from "./typings/index";

import generateCols from "./helpers/generate_cols";
import sleep from "./helpers/sleep";

import "./App.css";

export enum STATUS {
  NOT_SOLVED,
  PAUSED,
  SORTING,
  SOLVED,
}

type AppProps = {};
type AppState = {
  cols: Array<Col>;
  status: STATUS;
  progress: {
    i: number;
    j: number;
  };
};

class App extends Component<AppProps, AppState> {
  state = {
    cols: [],
    status: STATUS.NOT_SOLVED,
    progress: {
      i: 0,
      j: 0,
    },
  };

  componentDidMount(): void {
    this.resetCols();
  }

  resetCols(): void {
    const newCols = generateCols();

    this.setState({
      cols: newCols,
      status: STATUS.NOT_SOLVED,
      progress: {
        i: 0,
        j: 0,
      },
    });
  }

  async startSorting(): Promise<void> {
    const cols: Array<Col> = Array.from(this.state.cols);

    let i = this.state.progress.i || 0;

    this.setState({
      status: STATUS.SORTING,
    });

    while (i < cols.length) {
      let j = i;

      if (this.state.progress.i || this.state.progress.j) {
        const activeCol = cols.find((c) => c.active);

        j = this.state.progress.j;

        if (activeCol) {
          activeCol.active = false;
          this.updateCols(cols);
        }

        this.setState({ progress: { i: 0, j: 0 } });
      }

      cols[j].active = true;
      this.updateCols(cols);
      await sleep();

      while (j > 0) {
        if (this.state.status !== STATUS.SORTING) {
          this.setState({
            progress: { i, j },
          });

          return;
        }

        if (cols[j].value < cols[j - 1].value) {
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

    this.setState({
      status: STATUS.SOLVED,
    });
  }

  async pauseSorting(): Promise<void> {
    this.setState({ status: STATUS.PAUSED });
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
          pause={this.pauseSorting.bind(this)}
          status={this.state.status}
        />
      </div>
    );
  }
}

export default App;
