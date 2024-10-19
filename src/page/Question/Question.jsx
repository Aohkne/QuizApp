import "./Question.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";

import Button from "../../components/Button";

function Question({
  data,
  selectedAnswer,
  time,
  numQuestion,
  numselectedAnswer,
  onAnswerSelect,
  onNext,
  onPrev,
  onSubmit,
}) {
  return (
    <div className="question__wrapper">
      <div className="question__title">Quiz</div>
      {/* Container */}
      <div className="question__container">
        {/* Header */}
        <div className="question__header">
          <div className="question__time">
            <FontAwesomeIcon icon={faClock} className="time__icon" />
            <span>
              Time remaining
              <p>{time}</p>
            </span>
          </div>

          <div className="question__submit">
            <Button primary small onClick={onSubmit}>
              SUBMIT
            </Button>
          </div>
        </div>

        {/* Content */}
        <div className="question__content">
          <div className="question__questionInfo">
            <div className="question__num">Question {numQuestion}</div>
            <div className="question__question">{data.question}</div>
            <div className="question__list">
              {Object.entries(data.options).map(([key, value], index) => (
                <div
                  key={key}
                  className={`question__item ${
                    selectedAnswer === value ? "selected" : ""
                  }`}
                  onClick={(e) => onAnswerSelect(e, key, value)}
                >
                  {key}. {value}
                </div>
              ))}
            </div>
          </div>

          <div className="question__progress">
            <svg>
              <circle r="50"></circle>
              <circle id="progress" r="50"></circle>
            </svg>
            <span id="progress__count">{numselectedAnswer}/10</span>
          </div>
        </div>

        <div className="question__action">
          <Button outline full onClick={onPrev}>
            Prev
          </Button>
          <Button outline full onClick={onNext}>
            Next
          </Button>
        </div>

        {/* Info */}
        <div className="question__info"></div>
      </div>
    </div>
  );
}

export default Question;
