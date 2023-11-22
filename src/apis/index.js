
export const getAllQuestions = async () => {
  return fetch("http://localhost:3001/questions")
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

export const addQuestion = async (question) => {
  return fetch("http://localhost:3001/questions", {
    method: "POST",
    body: JSON.stringify(question),
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "same-origin",
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
};
export const deleteQuestion = async (questionId) => {
  return fetch(`http://localhost:3001/questions/${questionId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "same-origin",
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

