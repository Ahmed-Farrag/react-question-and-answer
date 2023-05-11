import React from "react";
import { Accordion, Button, Row } from "react-bootstrap";

const QAList = ({ data }) => {
  return (
    <Row>
      <Accordion>
        {data.length >= 1 ? (
          data.map((item, index) => {
            return (
              <Accordion.Item key={index} eventKey={item.id}>
                <Accordion.Header> {item.q}</Accordion.Header>
                <Accordion.Body className="text-end">
                  <div className="px-3 d-inline ">{item.a}</div>
                  <Button>مسح السؤال</Button>
                </Accordion.Body>
              </Accordion.Item>
            );
          })
        ) : (
          <h2 className="fs-4 text-center p-5"> لا يوجد اسئلة </h2>
        )}
      </Accordion>
    </Row>
  );
};

export default QAList;
