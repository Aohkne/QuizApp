import "./Step.scss";

function Step({ num, title, description }) {
  return (
    <div className="step__wrapper">
      <div className="step__content">
        <div className="step__num">{num}</div>
        <div className="step__title">{title}</div>
      </div>
      <div className="step__description">{description}</div>
    </div>
  );
}

export default Step;
