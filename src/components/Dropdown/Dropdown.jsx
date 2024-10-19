import "./Dropdown.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleDown } from "@fortawesome/free-solid-svg-icons";

function Dropdown({ question, answer, isOpen, toggle }) {
  return (
    <div className="dropdown">
      <div className="dropdown__container" onClick={toggle}>
        <div className="dropdown__question">{question}</div>
        <div className="dropdown__icon">
          {isOpen ? (
            <FontAwesomeIcon icon={faAngleLeft} />
          ) : (
            <FontAwesomeIcon icon={faAngleDown} />
          )}
        </div>
      </div>
      {isOpen && <div className="dropdown__answer">{answer}</div>}
    </div>
  );
}

export default Dropdown;
