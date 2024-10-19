import "./Guide.scss";

import Step from "../../components/Step";
import Code from "../../components/Code";

function Guide() {
  const questionModel = [
    {
      tab: 0,
      syntax: "[",
      comment: "",
    },
    {
      tab: 1,
      syntax: "{",
      comment: "",
    },
    {
      tab: 2,
      string: '"id"',
      syntax: ": ",
      comment: "// YOUR ID QUIZ",
      subString: " ,",
    },
    {
      tab: 2,
      string: '"title"',
      syntax: ": ",
      comment: "// TITLE OF YOUR SET QUIZ",
      subString: " ,",
    },
    {
      tab: 2,
      string: '"description"',
      syntax: ": ",
      comment: "// DESCRIPTION YOUR QUIZ",
      subString: " ,",
    },
    {
      tab: 2,
      string: '"number_of_questions"',
      syntax: ": ",
      comment: "// NUMBER OF QUESTION",
      subString: " ,",
    },
    {
      tab: 2,
      string: '"type"',
      syntax: ": ",
      comment: "// SUBJECT OF QUIZ",
      subString: " ,",
    },
    {
      tab: 2,
      string: '"questions"',
      syntax: ": [",
      comment: "",
    },
    {
      tab: 3,
      syntax: "{",
      comment: "",
    },
    {
      tab: 4,
      string: '"question"',
      syntax: ": ",
      subString:
        '"What is the unit of force in the International System of Units (SI)?" ,',
    },
    {
      tab: 4,
      string: '"options"',
      syntax: ": {",
    },
    {
      tab: 5,
      string: '"A"',
      syntax: ": ",
      subString: '"Joule" ,',
    },
    {
      tab: 5,
      string: '"B"',
      syntax: ": ",
      subString: '"Newton" ,',
    },
    {
      tab: 5,
      string: '"C"',
      syntax: ": ",
      subString: '"Watt" ,',
    },
    {
      tab: 5,
      string: '"D"',
      syntax: ": ",
      subString: '"Pascal"',
    },
    {
      tab: 4,
      syntax: "},",
    },
    {
      tab: 4,
      string: '"correct_answer"',
      syntax: ": ",
      subString: '"B"',
    },
    {
      tab: 3,
      syntax: "},",
    },
    {
      tab: 3,
      syntax: "{",
    },
    {
      tab: 3,
      comment: "//MORE QUESTION/ANSWER...",
    },
    {
      tab: 3,
      syntax: "},",
    },
    {
      tab: 2,
      syntax: "]",
    },
    {
      tab: 1,
      syntax: "},",
    },
    {
      tab: 0,
      syntax: "]",
    },
  ];

  return (
    <div className="guide__wrapper">
      <div className="guide__container">
        <div className="guide__title">Get started with QuizAPP</div>
        <div className="guide__description">
          A Quiz App is an interactive tool for practicing knowledge and
          critical thinking through customizable quizzes. It provides feedback,
          tracks progress, and makes learning fun and engaging
        </div>

        {/* Add */}
        <div className="guide__subtitle">Add Question</div>
        <Step
          num={1}
          title={"JSON File"}
          description={"You need a JSON file."}
        />
        <Code file={"Question.json"} content={questionModel} />
        <Step
          num={2}
          title={"ADD"}
          description={"Click Add quiz in Quiz PAGE"}
        />
      </div>
    </div>
  );
}

export default Guide;
