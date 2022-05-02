# Redux Book List Tracker

![List](https://github.com/RLewis11769/book_tracker-redux/blob/main/project_docs/book-list.png)

## Background

I did not like how Holberton taught Redux. Because we learned it "backwards", by the time I was actually able to test my output, I was two weeks into the project and wasn't sure where in the enormous codebase I had gone wrong. Instead of fixing my broken code immediately, I decided to start a new project to make sure I actually learned it. I plan on going back to the [Holberton project](https://github.com/RLewis11769/holbertonschool-web_react/tree/main/0x04-react_redux_connectors_and_providers) eventually!

I started out following a [tutorial](https://www.youtube.com/watch?v=q6LNf3QzgXQ) as described in the [Credit](#credit) section below, but modified so much that I consider this my own project to some extent.

## README Navigation

- [Background](#background)
- [Navigation](#readme-navigation)
- [Description](#description)
- [Examples](#examples)
- [Tools](#tools)
- [Features](#features)
- [Bugs](#bugs)
- [Attribution](#attribution)
- [Credit](#credit)

## Description

This project is a simple frontend to display a list of books on my reading list. Books can be added and deleted. The list is saved to a local storage and loaded on page load.

There are two pages, the homepage and the add book page. The homepage is the main page, and the add book page contains the form to add a new book to the list.

When a book is added to the list, it is added to global state and a notification modal is displayed. When a book is deleted, it is removed from global state and a notification message is displayed. Books are searchable by title.

About halfway through, I remembered how tedious I find CSS, so it's not amazingly responsive. Neither is it amazingly accessible. While I tend to pay close attention to both, the point of this project was to make sure I understand Redux so I decided not to spend too much time on issues outside of that scope.

## Examples

Form to add a new book to the list is shown here, with some validation shown:

![Form](https://github.com/RLewis11769/book_tracker-redux/blob/main/project_docs/add-form.png)

If form is not filled out correctly, a notification is displayed, as seen on tablet:

![Form Validation Notification](https://github.com/RLewis11769/book_tracker-redux/blob/main/project_docs/form-validation.png)

When a book is successfully added to the list, a modal is displayed:

![Successful Add Notification](https://github.com/RLewis11769/book_tracker-redux/blob/main/project_docs/success-modal.png)

An example of a search result is shown here, as seen on mobile:

![Search Result](https://github.com/RLewis11769/book_tracker-redux/blob/main/project_docs/search-mobile.png)

## Tools

- [React Redux](https://react-redux.js.org/) for global state management
- [React Router](https://reactrouter.com/docs/en/v6/getting-started/overview) for configuring multiple routes
- [React Final Form](https://final-form.org/react) for form validation and submission
- [React-Toastify](https://fkhadra.github.io/react-toastify/introduction) for displaying notifications
- [React-Modal](https://www.npmjs.com/package/react-modal) for displaying modals
- [Moment.js](https://momentjs.com/) for parsing, formatting, and displaying dates

## Features

- Global store based on bookReducer includes add, delete, and search functions. Data stored includes individual book data and the current query.
- All variables are typed for TypeScript. I usually write JavaScript and only add interfaces and type annotations when required, but actually wrote TypeScript for this project.
- ESLint configured to enforce best practices.
- Searchbar to search book list by title.
- Validation for proper input of form fields.
- I think the book gif in the header is very cute!
- I really like the Toastify notifications. It was easy and they look nice.
- I didn't find a huge improvement in using React-Modal over a Material UI Modal component, but it took less than 2 minutes to get it looking right as copied directly from the documentation.

## Bugs

- The book list is not clickable via keyboard for poor accessibility.
- The genre dropdown is not clickable via keyboard for poor accessibility.
- Some CSS is not responsive, especially in the form. The project looks best on desktop.
- Inconsistent styling for inputs and searchbar.
- Searching by anything other than title was not included.
- I didn't make an effort, but a real project would include the ability to edit books and clicking on them for a detailed view.
- In my actual reading list, I include a description, a subject grouping, and availability at the local library. I also keep books on the list after they are read with a boolean to identify. Not a bug, but any actual recreation of my reading list, rather than a Redux-based learning experience, would include these features.

## Attribution

<a target="_blank" rel="noreferrer"
href="https://www.flaticon.com/free-animated-icons/book"
title="book animated icon">Animated book icon created by Freepik - Flaticon</a>

<a target="_blank" rel="noreferrer"
href="https://icons8.com"
title="icons">Icons created by Icons8</a>

<a target="_blank" rel="noreferrer"
href="https://fontawesome.com/"
title="icons">Icons created by FontAwesome</a>

<a href="https://www.freepik.com/vectors/book-shelves">Book shelves vector created by vectorpouch - www.freepik.com</a>

<a href="https://elitmuspreparation.com/wp-content/uploads/2022/04/bookshelf-clipart-transparent-background-3.png">Transparent empty bookshelf vector created by elitmuspreparation</a>

## Credit

Original project created by [Overreacted](https://www.youtube.com/channel/UCGaLuxNAi6WfLZ7uW-FkRLA) aka [Shuvam Kumar](https://github.com/shuvamk) as found on [YouTube](https://www.youtube.com/watch?v=q6LNf3QzgXQ).

TypeScript conversion, HOC update, Final Form implementation, project theme, and CSS changes by [Rachel Lewis](https://github.com/RLewis11769).
