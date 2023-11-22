import React, { useState } from "react";
import { Button, Card, Form, Toast, ToastContainer } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addNewQuestion } from "../redux/actions/questionsAction";
import { Link } from "react-router-dom";

function Contact() {
  const { isLoading } = useSelector((state) => state.questions);

  const [form, setForm] = useState({
    text: "",
    answer1: "",
    answer2: "",
    answer3: "",
    answer4: "",
    correctAnswer: "",
  });

  const [show, setShow] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      form.correctAnswer !== form.answer1 &&
      form.correctAnswer !== form.answer2 &&
      form.correctAnswer !== form.answer3 &&
      form.correctAnswer !== form.answer4
    ) {
      setShow(true);
      return;
    }
    const req = {
      text: form.text,
      options: [form.answer1, form.answer2, form.answer3, form.answer4],
      correctAnswer: form.correctAnswer,
      selectedOption: null,
    };
    dispatch(addNewQuestion(req));
    setShowSuccess(true);
    setForm({
      text: "",
      answer1: "",
      answer2: "",
      answer3: "",
      answer4: "",
      correctAnswer: "",
    });
  };

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
      <ToastContainer
        className="p-3"
        position={"top-end"}
        style={{ zIndex: 1 }}
      >
        <Toast
          onClose={() => setShow(false)}
          show={show}
          delay={3000}
          autohide
          bg={"danger"}
        >
          <Toast.Header closeButton={false}>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">Error</strong>
            <small>Create question failed</small>
          </Toast.Header>
          <Toast.Body>4 answers must include correct answer</Toast.Body>
        </Toast>
        <Toast
          onClose={() => setShowSuccess(false)}
          show={showSuccess}
          delay={3000}
          autohide
          bg={"success"}
        >
          <Toast.Header closeButton={false}>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">Congratuation!!!</strong>
            {/* <small>Create question successfuly</small> */}
          </Toast.Header>
          <Toast.Body>Create question successfuly</Toast.Body>
        </Toast>
      </ToastContainer>
      <Card style={{ width: "40rem" }}>
        <Card.Header as="h5">
          <Form.Text>Create a new question</Form.Text>
        </Card.Header>
        <Card.Body>
          <Form onSubmit={(e) => handleSubmit(e)}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Your question:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your question..."
                onChange={(e) => setForm({ ...form, text: e.target.value })}
                required
                value={form.text}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Answer 1:</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Enter the first answer"
                onChange={(e) => setForm({ ...form, answer1: e.target.value })}
                value={form.answer1}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Answer 2:</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Enter the second answer"
                onChange={(e) => setForm({ ...form, answer2: e.target.value })}
                value={form.answer2}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Answer 3:</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Enter the third answer"
                onChange={(e) => setForm({ ...form, answer3: e.target.value })}
                value={form.answer3}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Answer 4:</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Enter the fourth answer"
                onChange={(e) => setForm({ ...form, answer4: e.target.value })}
                value={form.answer4}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Correct anwser:</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Enter correct answer"
                onChange={(e) =>
                  setForm({ ...form, correctAnswer: e.target.value })
                }
                value={form.correctAnswer}
              />
            </Form.Group>
            <Button type="submit" variant="primary" disabled={isLoading}>
              {isLoading ? "Loading…" : "Add new question"}
            </Button>
            <Link to={"/listquiz"}>
            <Button type="submit" variant="danger" style={{marginLeft:"300px"}}>
              View List Survey
            </Button>
            </Link>
           
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Contact;
