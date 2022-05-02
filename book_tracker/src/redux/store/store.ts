import { createStore } from 'redux';
import bookReducer, { initialState } from '../reducers/bookReducer';

// Create store with reducer actions and data from state
const store = createStore(bookReducer, initialState);

export default store;
