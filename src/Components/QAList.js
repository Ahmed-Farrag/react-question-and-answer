import React from "react";
import { Accordion, Button, Row } from "react-bootstrap";

const QAList = () => {
  return (
    <Row>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>السؤال الاول</Accordion.Header>
          <Accordion.Body className="text-end">
            <div className="px-3 d-inline ">اجابة السؤال</div>
            <Button>مسح السؤال</Button>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Row>
  );
};

export default QAList;
