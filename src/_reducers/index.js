import { combineReducers } from "redux";

import { authentication } from "./authentication.reducer";
import { users } from "./users.reducer";
import { alert } from "./alert.reducer";
import { authors } from "./authors.reducer";
import { books } from "./books.reducer";

const rootReducer = combineReducers({
  authentication,
  users,
  alert,
  authors,
  books,
});

export default rootReducer;
