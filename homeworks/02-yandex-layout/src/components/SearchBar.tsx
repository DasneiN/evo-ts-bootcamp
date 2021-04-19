import { ChangeEvent, Component, FormEvent } from "react";
import styled from "styled-components";

interface SearchBarProps {
  className?: string;
  searchText: string;
  onSearchInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  search: () => void;
}

class SearchBar extends Component<SearchBarProps> {
  onFormSubmit(e: FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    this.props.search();
  }

  render() {
      const { searchText, onSearchInputChange } = this.props;
      
    return (
      <header className={this.props.className}>
        <form action="#" onSubmit={this.onFormSubmit.bind(this)}>
          <input
            type="text"
            placeholder="Type text for search"
            value={searchText}
            onChange={onSearchInputChange}
          />
          <button type="submit">Search</button>
        </form>
      </header>
    );
  }
}

export default styled(SearchBar)`
  margin: 20px 0;
  width: 100%;
  padding: 0 20px;

  form {
    margin: 0 auto;
    width: 100%;
    max-width: 400px;

    input {
      border: 2px solid #fc0;
      border-right: none;
      height: 2.5em;
      border-radius: 0.5em 0 0 0.5em;
      padding-left: 1em;
      font-size: 1em;
      width: 80%;
      outline: none;
    }

    button {
      height: 2.5em;
      font-size: 1em;
      width: 20%;
      border: none;
      background-color: #fc0;
      border-radius: 0 0.5em 0.5em 0;
      cursor: pointer;
      outline: none;

      &:hover {
        background-color: #da0;
      }
    }
  }
`;
