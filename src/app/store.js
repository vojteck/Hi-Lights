import { configureStore } from '@reduxjs/toolkit';
import matchesReducer from './reducers/matchesSlice';
import thunk from 'redux-thunk';

export default configureStore({
  reducer: {
    matches: matchesReducer,
    middleware: [thunk]
  }
});