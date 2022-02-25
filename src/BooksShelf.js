import React from "react";
import Book from "./Book";
import PropTypes from "prop-types";

function BooksShelf(props) {
  //using destructing to assign all the props inside those variables to use them to render the proper UI
  const { shelfTitle, books, changeBookShelf } = props;

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{shelfTitle}</h2>
      <div className="bookshelf-books">
        {/* looping over all the books and send each single book to Book Component to be renderd inside its proper shelf */}
        <ol className="books-grid">
          {books.map((book) => (
            <Book book={book} changeTheShelf={changeBookShelf} key={book.id} />
          ))}
        </ol>
      </div>
    </div>
  );
}

//Checking on all the props if it was sent in the same types as i needed
BooksShelf.proptypes = {
  shelfTitle: PropTypes.string.isRequired,
  books: PropTypes.array.isRequired,
  changeBookShelf: PropTypes.func.isRequired,
};

export default BooksShelf;
