import "./Card.scss";
import Button from "../../components/Button";

import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

//IMG
import math from "../../asset/img/mathIcon.png";
import code from "../../asset/img/codeIcon.png";
import science from "../../asset/img/scienceIcon.png";
import history from "../../asset/img/historyIcon.png";
import physical from "../../asset/img/physicalIcon.png";

function Card({ data }) {
  let icon;

  icon =
    data.type === "math"
      ? math
      : data.type === "code"
      ? code
      : data.type === "science"
      ? science
      : data.type === "history"
      ? history
      : data.type === "physical"
      ? physical
      : null;

  return (
    <div className="card__wrappper">
      {/* Container */}
      <input type="hidden" value={data.id} />
      <div className="card__container">
        <div className="card__icon">
          <img src={icon} alt="" />
        </div>

        <div className="card__title">{data.title}</div>
        <div className="card__description">{data.description}</div>
      </div>

      {/* Action */}
      <div className="card__action">
        <Link to={`/play?id=${data.id}`}>
          <Button primary small rightIcon={faAngleRight}>
            Try it now
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Card;
