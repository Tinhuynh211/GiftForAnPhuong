// questionsActions.js
import { deleteQuestion as deleteQuestionApi, getAllQuestions, addQuestion } from "../../apis/index.js";
import { questionsTypes } from "../ActionTypes/questionsTypes.js";

export const fetchAllQuestions = () => async (dispatch) => {
  try {
    dispatch({
      type: questionsTypes.LOAD_QUESTION_LOADING,
      payload: true,
    });

    const res = await getAllQuestions();

    dispatch({
      type: questionsTypes.FETCH_ALL_QUESTIONS,
      payload: res,
    });
  } catch (err) {
    console.error("Error fetching questions:", err);
  } finally {
    dispatch({
      type: questionsTypes.LOAD_QUESTION_LOADING,
      payload: false,
    });
  }
};

export const addNewQuestion = (data) => async (dispatch) => {
  try {
    dispatch({
      type: questionsTypes.LOAD_QUESTION_LOADING,
      payload: true,
    });

    const res = await addQuestion(data);

    dispatch({
      type: questionsTypes.ADD_NEW_QUESTION,
      payload: res,
    });
  } catch (err) {
    console.error("Error adding new question:", err);
  } finally {
    dispatch({
      type: questionsTypes.LOAD_QUESTION_LOADING,
      payload: false,
    });
  }
};

export const deleteQuestion = (questionId) => async (dispatch) => {
  try {
    dispatch({
      type: questionsTypes.LOAD_QUESTION_LOADING,
      payload: true,
    });

    await deleteQuestionApi(questionId);

    dispatch({
      type: questionsTypes.DELETE_QUESTION,
      payload: questionId,
    });
  } catch (err) {
    console.error("Error deleting question:", err);
  } finally {
    dispatch({
      type: questionsTypes.LOAD_QUESTION_LOADING,
      payload: false,
    });
  }
};
