import React, { useState } from "react";
import { Button, Card, Form } from "react-bootstrap";

function CardQuestion({ question, index, setScore }) {
  const [option, setOption] = useState(question.options[0]);
  const [isShow, setIsShow] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const handleSubmit = () => {
    setIsShow(true);
    setIsCorrect(option === question.correctAnswer);
    if (option === question.correctAnswer) {
      setScore((prev) => prev + 1);
    }
  };

  return (
    <Card style={{ width: "70%" }} key={question.id}>
      <Card.Header>Question {index + 1}</Card.Header>
      <Card.Body>
        <p>{question.text}</p>
        <Form>
          {question.options.map((option, index) => (
            <Form.Check
              defaultChecked={index === 0}
              key={index}
              label={option}
              name="group1"
              type={"radio"}
              id={`inline-radio-1`}
              onChange={() => setOption(option)}
            />
          ))}
        </Form>
        <Button
          style={{ marginTop: 8 }}
          onClick={handleSubmit}
          disabled={isShow}
        >
          Submit
        </Button>
      </Card.Body>
      {isShow && (
        <Card.Footer>
          Correct answer:{" "}
          <span style={{ color: isCorrect ? "green" : "red" }}>
            {question.correctAnswer}
          </span>
        </Card.Footer>
      )}
    </Card>
  );
}

export default CardQuestion;
