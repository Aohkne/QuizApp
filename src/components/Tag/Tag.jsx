import "./Tag.scss";

//IMG
import start from "../../asset/img/start.png";

function Tag({ user, right = false, className = "" }) {
  //Json can not get ../ before
  const userImgPath = require(`../../${user.img}`);

  //Scroll left-right
  const classes = ["tag__wrapper", right ? "right" : "", className]
    .filter(Boolean)
    .join(" ");
  return (
    <div className={classes}>
      {/* Container */}
      <div className="tag__container">
        <div className="tag__img">
          <img src={userImgPath} alt="" />
        </div>

        {/* Content */}
        <div className="tag__content">
          <div className="tag__name">{user.name}</div>
          <div className="tag__username">{user.username} @</div>
          <div className="tag__start">
            {Array.from({ length: user.stars }).map((_, index) => (
              <img src={start} alt="" key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tag;
