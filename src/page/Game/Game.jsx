import "./Game.scss";

import Quiz from "../../components/layout/Quiz";

function Game() {
  const handleReadFile = (e) => {
    //Get file
    const file = e.target.files[0];
    const reader = new FileReader();

    //Read and render
    reader.onload = function (e) {
      try {
        const jsonData = JSON.parse(e.target.result);
        //set Data to local storage
        localStorage.setItem("quizData", JSON.stringify(jsonData));

        window.location.href = "/quiz";
      } catch (error) {
        console.log("Error parsing JSON:", error);
      }
    };

    reader.readAsText(file);
  };

  return (
    <div className="game__wrapper">
      <Quiz />

      {/* Button */}
      <div className="game__action">
        <label htmlFor="file-upload" className="game__upload">
          Add Quiz
        </label>
        <input
          type="file"
          className="game__input"
          id="file-upload"
          accept=".json"
          onChange={handleReadFile}
        />
      </div>
    </div>
  );
}

export default Game;
