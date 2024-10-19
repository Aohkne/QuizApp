import "./Authentic.scss";

import { Link } from "react-router-dom";

import Button from "../../components/Button";

//Img
import logoAuthen from "../../asset/img/logoAuthen.png";

function Authentic({ data }) {
  const handleLogin = (e) => {
    let name = document.querySelectorAll("input")[0].value;
    let password = document.querySelectorAll("input")[1].value;
    if (name === "admin" && password === "admin") {
      const date = new Date();

      // Set cookie for 8 days
      date.setTime(date.getTime() + 8 * 24 * 60 * 60 * 1000);
      const expires = "expires=" + date.toUTCString();
      document.cookie = "username=" + name + ";" + expires + ";path=/";

      window.location.href = "/";
    } else {
      alert("Name: admin and Password: admin");
    }
  };
  return (
    <div className="authentic__wrapper">
      <div className="authentic__container">
        {/* Header */}
        <div className="authentic__header">
          <div className="authentic__logo">
            <img src={logoAuthen} alt="" />
          </div>
          <div className="authentic__title">{data.title}</div>
        </div>

        {/* Content */}
        <div className="authentic__content">
          <div className="authentic__list">
            {data.input.map((e, index) => (
              <div className="authentic__item" key={index}>
                <label>{e.label}</label>
                <input type={e.type} />
              </div>
            ))}
          </div>

          <div className="authentic__action">
            <Button primary large onClick={handleLogin}>
              Continue
            </Button>
          </div>
        </div>

        {/* Footer */}
        <div className="authetic__footer">
          {data.message}
          <Link to={data.link}>{data.request}</Link>
        </div>
      </div>
    </div>
  );
}

export default Authentic;
