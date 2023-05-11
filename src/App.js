import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import FormInput from "./Components/FormInput";
import QAList from "./Components/QAList";
import { useState } from "react";
import { question } from "./data.js";

function App() {
  const [data, setData] = useState(question);
  const addItem = () => {
    setData([...question]);
  };
  return (
    <div className="font text-center color-body">
      <Container className="p-5">
        <Row className="justify-content-center">
          <Col sm="4">
            <div className="fs-3 text-center py-2">اسئلة واجوبة شائعة</div>
          </Col>
          <Col sm="8">
            <FormInput onAdd={addItem} />
            <QAList data={data} />
            {data.length >= 1 ? (
              <Button className="w-100 my-3">مسح الكل</Button>
            ) : null}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
