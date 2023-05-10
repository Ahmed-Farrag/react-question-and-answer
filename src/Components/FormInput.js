import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

const FormInput = () => {
  return (
    <Row className="my-3">
      <Col sm="5">
        <Form.Control type="text" placeholder="ادخل السؤال" />
      </Col>
      <Col sm="5">
        <Form.Control type="text" placeholder="ادخل الاجابة" />
      </Col>
      <Col sm="2">
        <Button className="w-100" variant="primary" type="submit">
          اضافة
        </Button>
      </Col>
    </Row>
  );
};

export default FormInput;
