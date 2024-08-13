// store.js
import { createStore } from 'redux';

const initialState = {
  isSuccess: false,
};

function appReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_SUCCESS':
      return { ...state, isSuccess: action.payload };
    default:
      return state;
  }
}

const store = createStore(appReducer);

export default store;
