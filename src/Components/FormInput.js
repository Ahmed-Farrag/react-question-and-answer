import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { question } from "../data";

const FormInput = ({ onAdd }) => {
  const [qu, setQu] = useState("");
  const [an, setAn] = useState("");
  const addNewItem = () => {
    question.push({ id: Math.random(), q: qu, a: an });
    setQu("");
    setAn("");
    onAdd();
    console.log(question);
  };
  return (
    <Row className="my-3">
      <Col sm="5">
        <Form.Control
          value={qu}
          onChange={(e) => setQu(e.target.value)}
          type="text"
          placeholder="ادخل السؤال"
        />
      </Col>
      <Col sm="5">
        <Form.Control
          value={an}
          onChange={(e) => setAn(e.target.value)}
          type="text"
          placeholder="ادخل الاجابة"
        />
      </Col>
      <Col sm="2">
        <Button
          onClick={addNewItem}
          className="w-100"
          variant="primary"
          type="submit"
        >
          اضافة
        </Button>
      </Col>
    </Row>
  );
};

export default FormInput;
