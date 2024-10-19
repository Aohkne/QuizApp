import "./Footer.scss";
import "bootstrap/dist/css/bootstrap.min.css";

import logo from "../../../asset/img/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faFacebook,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="container-fluid float-end">
      <div className="row">
        <div className="d-flex flex-column p-5 text-start col col-xl-4 col-lg-6 col-md-7 col-sm-12">
          <img src={logo} alt="" style={{ width: "198px" }} />
          <p style={{ fontSize: "1.6rem", margin: "10px 0px" }}>
            Quiz app is a software that helps practice thinking and create
            interesting questions.
          </p>
          <ul
            style={{ listStyleType: "none" }}
            className="p-0 d-flex flex-wrap gap-3 social-media-list"
          >
            <li>
              <FontAwesomeIcon icon={faEnvelope} />
            </li>
            <li>
              <FontAwesomeIcon icon={faGithub} />
            </li>
            <li>
              <FontAwesomeIcon icon={faFacebook} />
            </li>
            <li>
              <FontAwesomeIcon icon={faLinkedin} />
            </li>
          </ul>
        </div>
        <div className="text-start p-5 col col-xl-3">
          <h1 style={{ fontSize: "2.5rem", fontWeight: "600" }}>PRODUCT</h1>
          <ul
            style={{
              listStyleType: "none",
              padding: "0",
              fontSize: "2rem",
              color: "#717AEA",
              cursor: "pointer",
            }}
          >
            <li>Home</li>
            <li>Quiz</li>
            <li>Feedback</li>
            <li>Pricing</li>
            <li>About</li>
          </ul>
        </div>
        <div className="text-start p-5 col col-xl-3">
          <h1 style={{ fontSize: "2.5rem", fontWeight: "600" }}>RESOURCES</h1>
          <p style={{ color: "#717AEA", fontSize: "2rem", cursor: "pointer" }}>
            Help Docs
          </p>
        </div>
      </div>
    </footer>
  );
}
