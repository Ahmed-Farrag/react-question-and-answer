import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import FormInput from "./Components/FormInput";
import QAList from "./Components/QAList";
import { useState } from "react";
import { question } from "./data.js";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [data, setData] = useState(question);

  const addItem = () => {
    localStorage.setItem("items", JSON.stringify([...question]));
    setData([...question]);
    notify("تم الاضافة بنجاح", "Success");
  };

  const daleteAllItems = () => {
    localStorage.removeItem("items");
    question.slice(0, question.length);
    setData([]);
    notify("تم حذف الكل بنجاح", "Success");
  };

  const deleteOneItem = (items) => {
    localStorage.setItem("items", JSON.stringify([...items]));
    setData([...items]);
    notify("تم حذف السؤال بنجاح", "Success");
    // if (items.length <= 0) {
    //   daleteAllItems();
    // }
  };

  // to push notifaction
  const notify = (message, type) => {
    if (type === "Error") {
      toast.error(message);
    } else if (type === "Success") {
      toast.success(message);
    }
  };

  return (
    <div className="font text-center color-body">
      <Container className="p-5">
        <Row className="justify-content-center">
          <Col sm="4">
            <div className="fs-3 text-center py-2">اسئلة واجوبة شائعة</div>
          </Col>
          <Col sm="8">
            <FormInput onAdd={addItem} notify={notify} />
            <QAList data={data} deleteOneItem={deleteOneItem} />
            {data.length >= 1 ? (
              <Button onClick={daleteAllItems} className="w-100 my-3">
                مسح الكل
              </Button>
            ) : null}
          </Col>
        </Row>
      </Container>
      <ToastContainer />
    </div>
  );
}

export default App;
