import "./Game.scss";

import { Link } from "react-router-dom";

import Button from "../../components/Button";
import Quiz from "../../components/layout/Quiz";

function Game() {
  return (
    <div className="game__wrapper">
      <Quiz />

      {/* Button */}
      <div className="game__action">
        <Link to="/">
          <Button enormous primary>
            Create Quiz
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Game;
