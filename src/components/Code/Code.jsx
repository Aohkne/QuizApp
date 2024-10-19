import "./Code.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClone, faCheck } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

function Code({ file, content }) {
  const [icon, setIcon] = useState(faClone);

  const handleCopy = () => {
    let text = document.querySelector(".code__content").innerText;
    document.querySelector(".code__icon").style.color = "#7ee76d";
    setIcon(faCheck);
    navigator.clipboard.writeText(text);
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIcon(faClone);
      document.querySelector(".code__icon").style.color = "var(--primay)";
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, [icon]);

  return (
    <div className="code__wrapper">
      <div className="code__header">
        <div className="code__file">{file}</div>
        <div className="code__icon" onClick={handleCopy}>
          <FontAwesomeIcon icon={icon} />
        </div>
      </div>
      <div className="code__content">
        {content.map((e, index) => (
          <div
            className="code__item"
            style={{ textIndent: `${e.tab * 12}px` }}
            key={index}
          >
            {e.string}
            <span className="code__syntax">{e.syntax}</span>
            <span className="code__commment">{e.comment}</span>
            <span className="code__subString">{e.subString}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Code;
