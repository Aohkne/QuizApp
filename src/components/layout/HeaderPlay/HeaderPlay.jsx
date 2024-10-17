import "./HeaderPlay.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function HeaderPlay() {
  return (
    <div className="headerplay__wrapper">
      <div className="headerplay__list">
        <div className="headerplay__item">
          <Link to="/quiz">
            <FontAwesomeIcon icon={faHouse} />
          </Link>
        </div>

        <div className="headerplay__item">
          <Link to="">Quiz</Link>
        </div>

        <div className="headerplay__item">
          <Link to="">Total</Link>
        </div>

        <div className="headerplay__item">
          <Link to="">Rank</Link>
        </div>
      </div>
    </div>
  );
}

export default HeaderPlay;
