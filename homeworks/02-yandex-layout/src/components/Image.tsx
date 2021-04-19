import { Component } from "react";
import styled from "styled-components";

import { AppImage } from "../App";

interface ImageProps {
  className?: string;
  img: AppImage;
}

class ImageContainer extends Component<ImageProps> {
  render() {
    const { className, img } = this.props;

    const outerDivstyle = {
      width: (img.width * 200) / img.height + "px",
      flexGrow: (img.width * 200) / img.height,
    };
    const innerDivStyle = {
      paddingBottom: (img.height / img.width) * 100 + "%",
    };

    return (
      <div className={className} style={outerDivstyle}>
        <div style={innerDivStyle}></div>
        <img src={img.src} alt={img.alt} />
      </div>
    );
  }
}

export default styled(ImageContainer)`
  flex-grow: 1;
  margin: 2px;
  position: relative;

  div {
    display: block;
  }

  img {
    position: absolute;
    top: 0;
    width: 100%;
    vertical-align: bottom;
  }
`;
