import "./Score.scss";

//IMG
import avatar from "../../asset/img/avatar.png";

function Score({ name = "admin", username = "admin", rank, score, time }) {
  return (
    <div className="score__wrapper">
      <div className="score__title">Your Point</div>
      <div className="score__container">
        {/* Avatar */}
        <div className="score__img">
          <img src={avatar} alt="" />
        </div>

        {/* Content */}
        <div className="score__content">
          <div className="score__info">
            {name}
            <span>{username} @</span>
          </div>

          <div className="score__list">
            {/* <div className="score__item">
              <span>Rank</span>
              {rank}
            </div> */}
            <div className="score__item">
              <span>Point</span>
              {score}
            </div>
            <div className="score__item">
              <span>Time</span>
              {time}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Score;
