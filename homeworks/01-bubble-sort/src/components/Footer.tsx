import { Component } from "react";
import "../styles/Footer.scss";

import { STATUS } from "../App";

type FooterProps = {
  reset: () => void;
  start: () => void;
  pause: () => void;
  status: STATUS;
};

class Footer extends Component<FooterProps> {
  getCurrentStatus(): string {
    const { status } = this.props;

    switch (status) {
      case STATUS.PAUSED:
        return "Paused";

      case STATUS.SOLVED:
        return "Solved";

      case STATUS.SORTING:
        return "Sorting...";

      case STATUS.NOT_SOLVED:
      default:
        return "Not solved";
    }
  }

  render() {
    const { reset, start, pause, status } = this.props;

    return (
      <footer>
        <div className="controls">
          <button onClick={reset}>New set</button>
          {status === STATUS.SORTING ? (
            <button onClick={pause}>Pause</button>
          ) : (
            <button onClick={start}>Start</button>
          )}
        </div>
        <p className="status">{this.getCurrentStatus()}</p>
      </footer>
    );
  }
}

export default Footer;
