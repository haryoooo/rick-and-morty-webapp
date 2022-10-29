import { createStore, applyMiddleware } from "redux";
import characterReducer from "./characters/reducers/CharacterReducers";
import thunk from "redux-thunk";
import { createWrapper } from "next-redux-wrapper";

const store = () => {
  return createStore(characterReducer, applyMiddleware(thunk));
};

export const wrapper = createWrapper(store);
