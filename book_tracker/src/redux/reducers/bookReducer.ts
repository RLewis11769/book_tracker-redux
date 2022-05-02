import { ADD_BOOK, DELETE_BOOK, SEARCH_BOOKS } from '../actions/bookActionTypes';

const initializeList = () => {
  // Check if localStorage has data at key bookList
  const list = localStorage.getItem('library');
  if (list) {
    // If local storage has data, parse string data to JSON and return
    return (JSON.parse(list));
  }
  // If local storage does not have data, return empty array
  return [];
};

export const initialState = {
  // Initialize bookList with initialList as found in local storage
  bookList: initializeList(),
  query: '',
};

// All 3 actions have this format
interface BookAction {
  type: string;
  data: any;
}

// Linter wants param with default last, but that screws up reducer
// eslint-disable-next-line @typescript-eslint/default-param-last
const bookReducer = (state = initialState, action: BookAction) => {
  switch (action.type) {
    case ADD_BOOK:
      // Either creates new array or adds book data to existing array
      localStorage.setItem('library', JSON.stringify([...state.bookList, action.data]));
      // Add book data added to bookList initialState
      return {
        ...state,
        bookList: [...state.bookList, action.data],
      };
    case DELETE_BOOK:
      // Since not using id, createdAt is unique identifier
      const updatedList = state.bookList.filter((book) => book.createdAt !== action.data.createdAt);
      // Update local storage with bookList without deleted book
      localStorage.setItem('library', JSON.stringify(updatedList));
      return {
        ...state,
        bookList: updatedList,
      };
    case SEARCH_BOOKS:
      // Returns entire bookList with query as search term so can search on front end
      return {
        ...state,
        query: action.data,
      };
    default:
      return state;
  }
};

export default bookReducer;
