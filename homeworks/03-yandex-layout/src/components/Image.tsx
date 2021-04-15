import { Component } from "react";

import { AppImage } from "../App";

interface ImageProps {
  img: AppImage;
}

class ImageContainer extends Component<ImageProps> {
  render() {
    const { img } = this.props;

    return (
      <div>
        <img src={img.src} alt={img.alt} />
      </div>
    );
  }
}

export default ImageContainer;
