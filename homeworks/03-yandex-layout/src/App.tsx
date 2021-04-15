import { ChangeEvent, Component } from "react";

import SearchBar from "./components/SearchBar";
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
  searchText: string;
  images: Array<AppImage>;
}

class App extends Component<{}, AppState> {
  state = {
    searchText: "animals",
    images: [],
  };

  onSearchInputChange(e: ChangeEvent<HTMLInputElement>) {
    const searchText = e.target.value;

    this.setState({
      searchText,
    });
  }

  search(): void {
    fetch(`${baseUrl}&query=${this.state.searchText}`)
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

  componentDidMount() {
    this.search();
  }

  render() {
    return (
      <div className="App">
        <SearchBar
          searchText={this.state.searchText}
          onSearchInputChange={this.onSearchInputChange.bind(this)}
          search={this.search.bind(this)}
        />
        <ImagesContainer images={this.state.images} />
      </div>
    );
  }
}

export default App;
