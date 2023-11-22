import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllQuestions, deleteQuestion } from "../redux/actions/questionsAction";
import { Button, Spinner, Modal, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function ListQuiz() {
  const { questions, isLoading } = useSelector((state) => state.questions);
  const [showModal, setShowModal] = useState(false);
  const [deleteQuestionId, setDeleteQuestionId] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllQuestions());
  }, [dispatch]);

  const handleDelete = () => {
    if (deleteQuestionId) {
      dispatch(deleteQuestion(deleteQuestionId));
      setShowModal(false); // Close the modal after deletion
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setDeleteQuestionId(""); // Reset the deleteQuestionId when closing the modal
  };

  return (
    <div style={{ padding: 40, display: "flex", flexDirection: "column", alignItems: "center", gap: 20 }}>
      {isLoading ? (
        <div style={{ display: "flex", gap: 20 }}>
          <Spinner animation="grow" size="sm" />
          <Spinner animation="grow" size="sm" />
          <Spinner animation="grow" size="sm" />
        </div>
      ) : (
        questions.map((question) => (
          <Card key={question.id} style={{ width: "18rem", marginBottom: "20px" }}>
            <Card.Body>
              <Card.Title>Question {question.id}</Card.Title>
              <Card.Text>{question.text}</Card.Text>
              <Button variant="danger" onClick={() => {
                setDeleteQuestionId(question.id);
                setShowModal(true);
              }}>
                Delete
              </Button>
            </Card.Body>
          </Card>
        ))
      )}

      <Link to="/contact">
        <Button type="submit" variant="primary" disabled={isLoading}>
          {isLoading ? "Loading…" : "Add new question"}
        </Button>
      </Link>

      {/* Confirmation Modal */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to delete this question?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ListQuiz;
