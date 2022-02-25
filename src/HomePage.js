//importing required packages
import React, { Component } from "react";
import { Link } from "react-router-dom";
import BooksShelf from "./BooksShelf";
import PropTypes from "prop-types";

//Checking on all the props if it was sent in the same types as i needed
class HomePage extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    currentlyReadingBooks: PropTypes.array.isRequired,
    wantToReadBooks: PropTypes.array.isRequired,
    readBooks: PropTypes.array.isRequired,
    arrangeBooksOnShelves: PropTypes.func.isRequired,
    changeBookShelf: PropTypes.func.isRequired,
  };

  //calling changeBook function from props to set it here so i can use it inside BooksShelf component
  changeBookShelf = (book, newShelf) => {
    this.props.changeBookShelf(book, newShelf);
  };

  render() {
    const currentlyReadingBooks = this.props.currentlyReadingBooks;
    const wantToReadBooks = this.props.wantToReadBooks;
    const readBooks = this.props.readBooks;

    // array of shelves to loop over and arrange all of them
    const shelves = [
      {
        key: "currentlyReading",
        title: "Currently Reading",
        books: currentlyReadingBooks,
      },

      {
        key: "wantToRead",
        title: "Want To Read",
        books: wantToReadBooks,
      },

      {
        key: "read",
        title: "Read",
        books: readBooks,
      },
    ];
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>

        {/* making three shelves with the different titles required to arrange my books inside them */}
        <div className="list-books-content">
          {shelves.map((shelf) => (
            <BooksShelf
              key={shelf.key}
              shelfTitle={shelf.title}
              books={shelf.books}
              changeBookShelf={this.changeBookShelf}
            />
          ))}

          <div className="open-search">
            <Link to="/search">
              <button>Add a book</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
