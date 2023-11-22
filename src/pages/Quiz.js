import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllQuestions } from "../redux/actions/questionsAction";
import { Card, Form, Spinner } from "react-bootstrap";
import CardQuestion from "../components/CardQuestion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Quiz() {
  const { questions, isLoading } = useSelector((state) => state.questions);
  const [score, setScore] = useState(0)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllQuestions());
  }, []);

  
// ...

// Render component
return (
  <div
    style={{
      padding: 40,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 20,
    }}
  >
    {/* Kiểm tra nếu đang loading, hiển thị Spinner */}
    {isLoading ? (
      <div style={{ display: "flex", gap: 20 }}>
        <Spinner animation="grow" size="sm" />
        <Spinner animation="grow" size="sm" />
        <Spinner animation="grow" size="sm" />
      </div>
    ) : (
      // Nếu không loading, map qua mảng câu hỏi và hiển thị CardQuestion
      questions.map((question, index) => (
        <CardQuestion
          setScore={setScore}
          question={question}
          index={index}
          key={question.id}
        ></CardQuestion>
      ))
    )}
    {/* Hiển thị điểm số */}
    <p style={{ fontSize: "20px", fontWeight: 700 }}>
      An Phương đã được {score} điểm
    </p>
    
    {/* Kiểm tra điều kiện và hiển thị thông báo sử dụng alert nếu score bằng 4 */}
    {score === 5 && (
      // Hiển thị thông báo sử dụng alert
      alert("Em Yêu Anh rất là nhiều đó và anh sẽ cho em một món quàaaaaa ")
    )}
  </div>
);


}

export default Quiz;
