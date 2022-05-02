import { ADD_BOOK, DELETE_BOOK, SEARCH_BOOKS } from './bookActionTypes';
import { BookShape } from '../../Interfaces';

// All creators have same info except for type
// Delete and add pass same info as data value while search passes query
export const addBook = (book: BookShape) => {
  return ({
    type: ADD_BOOK,
    data: book,
  });
};

export const deleteBook = (book: BookShape) => {
  return {
    type: DELETE_BOOK,
    data: book,
  };
};

export const searchBooks = (query: string) => {
  // Contains search param rather than book
  return {
    type: SEARCH_BOOKS,
    data: query,
  };
};
