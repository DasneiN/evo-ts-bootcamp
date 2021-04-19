import { Component } from "react";

import { Col } from "../typings/index";

import getColHeight from "../helpers/get_col_height";

import "../styles/Main.scss";

type MainProps = {
  cols: Array<Col>;
};

class Main extends Component<MainProps> {
  render() {
    return (
      <main>
        <div className="cols-container">
          {this.props.cols.map((col) => {
            const height = getColHeight(col.value);
            const { active } = col;
            const colClassName = `col ${active ? 'active' : ''}`;

            return (
              <div
                key={col.id}
                className={colClassName}
                style={{ height }}
              ></div>
            );
          })}
        </div>
      </main>
    );
  }
}

export default Main;
