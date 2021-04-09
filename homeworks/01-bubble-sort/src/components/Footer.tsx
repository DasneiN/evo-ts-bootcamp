import { ChangeEvent, Component, MouseEvent } from "react";
import "../styles/Footer.scss";

import { STATUS, AppConfig } from "../App";

type FooterProps = {
  reset: (e: MouseEvent<HTMLButtonElement>) => void;
  start: (e: MouseEvent<HTMLButtonElement>) => void;
  pause: (e: MouseEvent<HTMLButtonElement>) => void;
  changeInterval: (e: ChangeEvent<HTMLInputElement>) => void;
  status: STATUS;
  config: AppConfig;
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
    const { changeInterval, reset, start, pause, status, config } = this.props;

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
        <div className="status">
          <p>{this.getCurrentStatus()}</p>
        </div>
        <div className="options">
          <h2>Options section</h2>
          <div className="options-container">
            <fieldset>
              <label htmlFor="interval">
                Step interval (
                {config.stepInterval.toString().padStart(4, " ") + "ms"}):{" "}
              </label>
              <input
                type="range"
                id="interval"
                name="vol"
                min="10"
                max="1000"
                step="10"
                onChange={changeInterval}
                value={config.stepInterval}
              />
            </fieldset>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
