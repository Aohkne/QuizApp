import React, { useState } from "react";
import Dropdown from "../../Dropdown";
import questionsData from "../../../asset/database/FAQ.json";
import "./FAQ.scss";

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleDropdown = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="help__container">
      <div className="help__title">Frequently asked questions</div>
      <div className="help__subTitle">
        Everything you need to know about our amazing services.
      </div>

      <div className="dropdown__list">
        {questionsData.map((q, index) => (
          <Dropdown
            key={index}
            question={q.question}
            answer={q.answer}
            isOpen={activeIndex === index}
            toggle={() => toggleDropdown(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default FAQ;
