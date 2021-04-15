import { Component } from "react";

import ImagesContainer from "./components/ImagesContainer";

const baseUrl: string = `https://api.unsplash.com/search/photos?client_id=${process.env.REACT_APP_UNSPLASH_CLIENT_ID}&per_page=20`;

interface UnsplashImage {
  id: string;
  alt_description: string;
  width: number;
  height: number;
  urls: {
    [key: string]: string;
  };
}

export interface AppImage {
  id: string;
  src: string;
  alt: string;
  width: number;
  height: number;
}

interface AppState {
  searchQuery: string;
  images: Array<AppImage>;
}

class App extends Component<{}, AppState> {
  state = {
    searchQuery: "nature",
    images: [],
  };

  componentDidMount() {
    fetch(`${baseUrl}&query=${this.state.searchQuery}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        const images = data.results.map((img: UnsplashImage) => ({
          id: img.id,
          src: img.urls.small,
          alt: img.alt_description,
          width: img.width,
          height: img.height,
        }));

        this.setState({
          images,
        });
      })
      .catch((err) => {
        this.setState({
          images: [],
        });
      });
  }

  render() {
    return (
      <div className="App">
        <ImagesContainer images={this.state.images} />
      </div>
    );
  }
}

export default App;
