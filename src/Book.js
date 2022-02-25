import React from "react";
import PropTypes from "prop-types";

function Book(props) {
  /*calling handleChange function which is assigned to OnChange method on the input field
  to be able to handle any change happen inside the input field*/
  const handleTheChange = (oldBook, newShelf) => {
    props.changeTheShelf(oldBook, newShelf);
  };

  const image =
    props.book.imageLinks && props.book.imageLinks.smallThumbnail
      ? `url(${props.book.imageLinks.smallThumbnail})`
      : "No Image";

  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `${image}`,
            }}
          />
          <div className="book-shelf-changer">
            <select
              /*setting the default value of the shelf to its current shelf
              so it render in the proper way when i try to change the shelf*/
              defaultValue={props.book.shelf ? props.book.shelf : "none"}
              onChange={(event) => {
                handleTheChange(props.book, event.target.value);
              }}
            >
              <option value="move" disabled>
                Move to...
              </option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{props.book.title}</div>
        <div className="book-authors">
          {/* checking on the authors existence. first if it's one author it will show normally,
          if more than, one then will be renderd separated by comma and if there is no author it will show
           "No Author" */}
          {props.book.authors
            ? props.book.authors.length > 1
              ? props.book.authors.join(", ")
              : props.book.authors
            : "No Author"}
        </div>
      </div>
    </li>
  );
}

//Checking on all the props if it was sent in the same types as i needed
Book.proptypes = {
  book: PropTypes.object.isRequired,
  changeTheShelf: PropTypes.func.isRequired,
};

export default Book;
