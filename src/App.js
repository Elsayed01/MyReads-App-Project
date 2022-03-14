// import needed packages and Components inside my App component
import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import HomePage from "./HomePage";
import SearchPage from "./SearchPage";
import ErrorPage from "./ErrorPage";

class BooksApp extends React.Component {
  // use constructor so it runs the first thing when my app start
  constructor(props) {
    super(props);

    /*declare a state and assign 4 arrays to it 
    which will be responsible for all the books's shelves in my App*/
    this.state = {
      books: [],

      currentlyReading: [],

      wantToRead: [],

      read: [],
    };
  }

  /*use componentDidMount hook so it will invoke right after constructor and 
  use it to get all the books that has shelves from the BooksAPI*/
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.arrangeBooksOnShelves(books);
    });
  }

  //arrangeBooks function that will put the books on their right shelf
  arrangeBooksOnShelves = (books) => {
    this.setState((currentState) => ({
      books: books,
      currentlyReading: books.filter(
        (book) => book.shelf === "currentlyReading"
      ),

      wantToRead: books.filter((book) => book.shelf === "wantToRead"),

      read: books.filter((book) => book.shelf === "read"),
    }));
  };

  /*changeBookShelf function that will change the shelf of a book 
  taking that book and the newshelf as paramaters*/
  changeBookShelf = (book, newShelf) => {
    const allBooks = this.state.books;
    const updatedBookIndex = allBooks.findIndex(
      (bookFromBooks) => bookFromBooks.id === book.id
    );

    /*checking on the index of the book which its shelf need to be changed
    to see if it's in the array of the books that has shelf already or not, if it doesn't then
    will give it the newshelf name and push it to all the books array. if it does exist in the array
    then will just change the shelf to the new shelf*/
    if (updatedBookIndex === -1) {
      book.shelf = newShelf;
      allBooks.push(book);
    } else {
      allBooks[updatedBookIndex].shelf = newShelf;
    }

    //calling the arrangeBooks functions to rearrange the books on their right shelves again
    this.arrangeBooksOnShelves(allBooks);

    //update the books's shelves using the update method in BooksAPI
    BooksAPI.update(book, newShelf);
  };
  render() {
    return (
      /* using two routes inside the app. one for the HomePage
      and the other for SearchPage to route between them using "Link"*/
      <div className="app">
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              //passing all the needed props to the HomePage component
              <HomePage
                books={this.state.books}
                currentlyReadingBooks={this.state.currentlyReading}
                wantToReadBooks={this.state.wantToRead}
                readBooks={this.state.read}
                arrangeBooksOnShelves={this.arrangeBooksOnShelves}
                changeBookShelf={this.changeBookShelf}
              />
            )}
          />

          <Route
            exact
            path="/search"
            render={() => (
              //passing all the needed props to the SearchPage component
              <SearchPage
                changeBookShelf={this.changeBookShelf}
                mainBooks={this.state.books}
              />
            )}
          />

          {/* Error 404 page will render when no page to render is found */}
          <Route path="*" render={() => <ErrorPage />} />
        </Switch>
      </div>
    );
  }
}

export default BooksApp;
