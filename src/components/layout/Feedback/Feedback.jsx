import "./Feedback.scss";
import Tag from "../../Tag";

import userData from "../../../asset/database/user.json";

function Feedback() {
  return (
    <div className="feedback__wrapper">
      <div className="feedback__title">Recommended by User</div>

      {/* Left */}
      <div className="feedback__list">
        {userData.map((user, index) => (
          <Tag key={index} user={user} className="feedback__item" />
        ))}
      </div>

      {/* Right */}
      <div className="feedback__list">
        {userData.map((user, index) => (
          <Tag key={index} user={user} right className="feedback__item" />
        ))}
      </div>
    </div>
  );
}

export default Feedback;
