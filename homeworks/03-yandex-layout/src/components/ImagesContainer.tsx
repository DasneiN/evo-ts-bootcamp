import { Component } from "react";
import styled from "styled-components";

import Image from "./Image";

import { AppImage } from "../App";

interface ImagesContainerProps {
  className?: string;
  images: Array<AppImage>;
}

class ImagesContainer extends Component<ImagesContainerProps> {
  render() {
    return (
      <div className={this.props.className}>
        {this.props.images.map((img: AppImage) => (
          <Image key={img.id} img={img} />
        ))}
      </div>
    );
  }
}

export default styled(ImagesContainer)`
  display: flex;
  flex-wrap: wrap;

  &:after {
    content: "";
    flex-grow: 999999999;
  }
`;
