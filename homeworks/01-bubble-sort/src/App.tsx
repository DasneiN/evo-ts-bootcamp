import { ChangeEvent, Component, MouseEvent } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";

import { Col } from "./typings/index";

import generateCols from "./helpers/generate_cols";

import CONFIG from "./config";

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
  stepInterval: number;
  stepByStepMode: boolean;
  stepTimeout: ReturnType<typeof setTimeout> | number;
};

class App extends Component<AppProps, AppState> {
  state = {
    cols: [],
    status: STATUS.NOT_SOLVED,
    progress: {
      i: 0,
      j: 0,
    },
    stepInterval: CONFIG.SORTING_DELAY,
    stepByStepMode: true,
    stepTimeout: 0,
  };

  componentDidMount(): void {
    this.resetCols();
  }

  resetCols(): void {
    const newCols = generateCols();

    if (this.state.stepTimeout > 0) {
      clearTimeout(this.state.stepTimeout);
    }

    this.setState({
      cols: newCols,
      status: STATUS.NOT_SOLVED,
      progress: {
        i: -1,
        j: 0,
      },
      stepTimeout: 0,
    });
  }

  sortingStep(): void {
    if (this.state.status !== STATUS.SORTING) {
      return;
    }

    const cols: Array<Col> = Array.from(this.state.cols);
    let { i, j } = this.state.progress;

    if (j > 0) {
      if (cols[j].value < cols[j - 1].value) {
        const temp = cols[j];
        cols[j] = cols[j - 1];
        cols[j - 1] = temp;

        j -= 1;
      } else {
        i += 1;
        j = i;
      }
    } else {
      i += 1;
      j = i;
    }

    cols.forEach((c) => (c.active = false));

    if (i >= cols.length) {
      this.setState({
        status: STATUS.SOLVED,
        progress: {
          i: -1,
          j: 0,
        },
      });

      return;
    }

    cols[j].active = true;

    this.setState({
      cols,
      progress: { i, j },
    });

    if (this.state.stepByStepMode) {
      this.setState({
        status: STATUS.PAUSED,
      });
    } else {
      const stepTimeout = setTimeout(
        this.sortingStep.bind(this),
        this.state.stepInterval
      );

      this.setState({ stepTimeout });
    }
  }

  start(e: MouseEvent<HTMLButtonElement>): void {
    e.preventDefault();

    this.setState(
      {
        status: STATUS.SORTING,
      },
      this.sortingStep
    );
  }

  pause(e: MouseEvent<HTMLButtonElement>): void {
    e.preventDefault();
    this.setState({ status: STATUS.PAUSED });
  }

  reset(e: MouseEvent<HTMLButtonElement>): void {
    e.preventDefault();
    this.resetCols();
  }

  changeInterval(e: ChangeEvent<HTMLInputElement>): void {
    this.setState({
      stepInterval: +e.target.value,
    });
  }

  changeMode(e: ChangeEvent<HTMLInputElement>): void {
    this.setState({
      stepByStepMode: e.target.checked,
    });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Main cols={this.state.cols} />
        <Footer
          reset={this.reset.bind(this)}
          start={this.start.bind(this)}
          pause={this.pause.bind(this)}
          changeInterval={this.changeInterval.bind(this)}
          changeMode={this.changeMode.bind(this)}
          status={this.state.status}
          stepInterval={this.state.stepInterval}
          stepByStepMode={this.state.stepByStepMode}
        />
      </div>
    );
  }
}

export default App;
