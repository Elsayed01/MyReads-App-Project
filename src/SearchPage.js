import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import Book from "./Book";
import PropTypes from "prop-types";
class SearchPage extends Component {
  //Checking on all the props if it was sent in the same types as i needed
  static propTypes = {
    changeBookShelf: PropTypes.func.isRequired,
    mainBooks: PropTypes.array.isRequired,
  };

  //declare a state and assign query which is responsible for controlling field input
  // and books which will have all the search books inside it coming from search method of BooksApi
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      books: [],
    };
  }

  //update query function to be able to update the query by every letter the user input
  updateMyQuery = (event) => {
    this.setState((currentState) => ({
      query: event,
    }));

    /*in case the input field isn't empty then it will show all render the search books according to the user's input,
    and if the input field is empty then nothing will be rendered*/
    if (event !== "") {
      BooksAPI.search(event).then((searchBooks) => {
        if (searchBooks.length > 0) {
          for (let searchBook of searchBooks) {
            for (let mainbook of this.props.mainBooks) {
              if (searchBook.id === mainbook.id) {
                const bookOnShelfIndex = this.props.mainBooks.findIndex(
                  (book) => book.id === searchBook.id
                );
                searchBook.shelf = this.props.mainBooks[bookOnShelfIndex].shelf;
              }
            }
          }

          this.setState((currentState) => ({
            books: searchBooks,
          }));
        } else {
          this.setState((currentState) => ({
            books: [],
          }));
        }
      });
    } else {
      this.setState((currentState) => ({
        query: "",
        books: [],
      }));
    }
  };

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/">
            <button className="close-search">Close</button>
          </Link>

          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={this.state.query}
              onChange={(event) => this.updateMyQuery(event.target.value)}
            />
          </div>
        </div>

        <div className="search-books-results">
          <ol className="books-grid">
            {this.state.books.length > 0 &&
              this.state.books.map((book) => (
                <Book
                  book={book}
                  changeTheShelf={this.props.changeBookShelf}
                  key={book.id}
                />
              ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default SearchPage;
