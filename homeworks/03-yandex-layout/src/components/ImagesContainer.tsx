import { Component } from "react";

import Image from "./Image";

import { AppImage } from "../App";

interface ImagesContainerProps {
  images: Array<AppImage>;
}

class ImagesContainer extends Component<ImagesContainerProps> {
  render() {
    return (
      <div className="images-container">
        {this.props.images.map((img: AppImage) => (
          <Image key={img.id} img={img} />
        ))}
      </div>
    );
  }
}

export default ImagesContainer;
