import Card from "../../Card";
import "./Quiz.scss";

import questionData from "../../../asset/database/question.json";
import { useEffect, useState } from "react";

function Quiz() {
  const [data, setData] = useState([...questionData]);
  //get Data

  useEffect(() => {
    const storedData = localStorage.getItem("quizData");
    let dataJson = [];
    if (storedData) {
      dataJson = JSON.parse(storedData);
    }
    setData([...questionData, ...dataJson]);
  }, []);

  return (
    <div className="quiz__wrapper">
      <div className="quiz__title">It’s Quiz Time! See How You Score.</div>

      <div className="cart__list">
        {data.map((data, index) => (
          <Card key={index} data={data} />
        ))}
      </div>
    </div>
  );
}

export default Quiz;
