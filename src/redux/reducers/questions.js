// questionsReducer.js
import { questionsTypes } from "../ActionTypes/questionsTypes.js";

const initialState = {
  questions: [],
  isLoading: false,
  error: null,
};

const questionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case questionsTypes.FETCH_ALL_QUESTIONS:
      return {
        ...state,
        questions: action.payload,
        isLoading: false,
        error: null,
      };
    case questionsTypes.ADD_NEW_QUESTION:
      return {
        ...state,
        questions: [...state.questions, action.payload],
        isLoading: false,
        error: null,
      };
    case questionsTypes.DELETE_QUESTION:
      return {
        ...state,
        questions: state.questions.filter((question) => question.id !== action.payload),
        isLoading: false,
        error: null,
      };
    case questionsTypes.LOAD_QUESTION_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    // ... (other cases)
    default:
      return state;
  }
};

export default questionsReducer;
