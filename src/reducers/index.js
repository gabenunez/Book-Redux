import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import ActiveBook from './reducer_active_book';

const rootReducer = combineReducers({
  // Keys provided end up as keys on global state.
  books: BooksReducer,
  activeBook: ActiveBook
});

export default rootReducer;
