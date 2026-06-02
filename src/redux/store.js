import {createStore,combineReducers} from "redux";
import bookListReducer from "./reducers/bookListReducer";

const rootReducer=combineReducers({
  bookInfo:bookListReducer,
})

const store= createStore(rootReducer);

export default store;