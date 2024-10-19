import "./Play.scss";

import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import HeaderPlay from "../../components/layout/HeaderPlay";
import Question from "../Question";
import Score from "../Score";

import questionData from "../../asset/database/question.json";

function Play() {
  //Get data
  const storedData = localStorage.getItem("quizData");
  let dataJson = [];
  if (storedData) {
    dataJson = JSON.parse(storedData);
  }
  const data = [...questionData, ...dataJson];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState({});
  const [score, setScore] = useState(0);
  const [quizEnd, setQuizEnd] = useState(false);
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes
  const [totalTime, setTotalTime] = useState();

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const id = parseInt(queryParams.get("id")) || 0;

  useEffect(() => {
    // Time
    const timerId = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 0) {
          clearInterval(timerId);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, []);

  const handleNextQuestion = () => {
    if (currentQuestion < 9) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setCurrentQuestion(0);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    } else {
      setCurrentQuestion(9);
    }
  };

  const handleSelectAnswer = (e, key, answer) => {
    // Circle
    let circle = document.querySelector("#progress");
    const radius = circle.getAttribute("r");
    circle.style = `stroke-dasharray: ${
      (2 * Math.PI * radius * (Object.keys(selectedAnswer).length + 1)) / 10
    } 9999`;

    //Active
    e.target.classList.add("selected");
    setSelectedAnswer({
      ...selectedAnswer,
      [currentQuestion]: answer,
    });
  };

  const handleSubmit = () => {
    //Time
    setTotalTime(600 - timeLeft);
    setTimeLeft(0);

    //Score
    Object.entries(selectedAnswer).forEach(([questionIndex, answer]) => {
      const correctAnswer = data[id].questions[questionIndex].correct_answer;
      const correctOption =
        data[id].questions[questionIndex].options[correctAnswer];

      if (answer === correctOption) {
        setScore((prevScore) => prevScore + 10);
      }
    });

    setQuizEnd(true);
  };

  //Format time
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
      2,
      "0"
    )}`;
  };

  return (
    <div className="play__wrapper">
      {quizEnd ? (
        <>
          <HeaderPlay />
          <Score rank={5} score={score} time={formatTime(totalTime)} />
        </>
      ) : (
        <>
          <Question
            data={data[id].questions[currentQuestion]}
            selectedAnswer={selectedAnswer[currentQuestion]}
            time={formatTime(timeLeft)}
            numQuestion={currentQuestion + 1}
            numselectedAnswer={Object.keys(selectedAnswer).length}
            onAnswerSelect={handleSelectAnswer}
            onNext={handleNextQuestion}
            onPrev={handlePreviousQuestion}
            onSubmit={handleSubmit}
          />
        </>
      )}
    </div>
  );
}

export default Play;
