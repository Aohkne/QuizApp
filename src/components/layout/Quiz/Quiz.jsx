import Card from "../../Card";
import "./Quiz.scss";

import questionData from "../../../asset/database/question.json";

function Quiz() {
  return (
    <div className="quiz__wrapper">
      <div className="quiz__title">It’s Quiz Time! See How You Score.</div>

      <div className="cart__list">
        {questionData.map((data, index) => (
          <Card key={index} data={data} />
        ))}
      </div>
    </div>
  );
}

export default Quiz;
