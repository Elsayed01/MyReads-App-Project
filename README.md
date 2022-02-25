# MyReads App Project

## Project Description

This is an application to deal with BooksApi and get the books inside it and render it on the Homepage according to three shelves which are:

1- Currently Reading
2- Want To Read
3- Read

with the ability to change the shelf of each book and it should highlight the current shelf where it's on the dropdown menu.

the app also can take you to Search page by clicking on the bottom right button inside Homepage where you can search and add new books from it to your Homepage and to put it inside whatever shelf you want, considering that when you search for the book again after you had it added to some shelf on your homepage, it should highlights that shelf on the book's dropdown on the Search page.

you can go to the Homepage from the Search page by clicking on the top right button inside the Search page.

if by any chance you went to wrong URL the app will take you to the Error page where you will find a link when you click you on it, it will take you to the Homepage. don't worry there will be an arrow to lead you to that link :wink:

-don't forget to install the dependencies using "npm install" command and run the development environment using "npm run"

## Functionalities

1- install packages through terminal like (npm, react-router-dom, prop-types)

2- declare state to store mutable data which were the books, its shelves and the input field value(query).

3- use componentDidMount hook to call the Books API's getAll method to get all the books that has shelves and store it inside the book state.

4- arrangeBookOnShelves function that will take all the books and arrange them according to their shelves.

5- changeBookShelf fucntion that will take the book and the new shelf to change the book's shelf reacting to the user changing the books's shelves by the dropdown menu.

6- BooksApi's update method to update the shelves of the books inside the API either due to the changes that the user make.

7- passing props to the children components from the Parent Component (App component) to be able to use it and having them as controlled component by the Parent.

8- use .map() method to loop over all the books array to get book by book and render it inside its proper shelves inside Book Component that is repsonisble for rendering the books in a grid

9- onChange() method to handle the change that is occuring on the input field

10- .join() to merge the authors by a comma in case there are more than 1 author for some book

11- findIndex() to find an idex of some books that is going to have their shelves changed to be able to change the old shelf by the new one using that index in case there is difference between both.

12- PropTypes from "prop-types" package to check on the props that is being passed from parents to childs

13- Route and Link from "react-router-dom" package to switch between the Homepage and Search page by clicking on the bottom right button inside Homepage to go to the Search page or clicking on the top left button inside the Search page to go to the Homepage.

14- Switch from "react-router-dom" package which will be responsible for switching between routes and is going to take you to the Error page if any of the routes doesn't match where you will find another Link to take you back to the Homepage

## author

Elsayed Ahmed Mohamed
