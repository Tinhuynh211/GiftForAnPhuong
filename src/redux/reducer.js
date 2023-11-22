import { combineReducers } from "redux";
import questionsReducer from "./reducers/questions";

const rootReducer = combineReducers({
  questions: questionsReducer,
});

export default rootReducer;
