import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../../Button";
import "./Pricing.scss";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

function Pricing() {
  const dataPlan = [
    {
      name: "Basic",
      type: "green",
      description: "Access a variety of quizzes at no cost",
      price: 0,
      benefits: [
        "Create 5 free question sets",
        "Explore new subjects",
        "User-friendly and accessible",
      ],
    },
    {
      name: "Premium",
      type: "purple",
      description: "Unlock personalized quizzes and advanced analytics",
      price: 9.99,
      benefits: [
        "Create 20 free question sets",
        "Share them with friends",
        "Randomly shuffled quiz questions",
      ],
    },
    {
      name: "Ultimate",
      type: "blue",
      description: "Enjoy exclusive content and custom themes",
      price: 99,
      benefits: [
        "Create unlimited question sets",
        "Customize quiz interface",
        "Access exclusive quizzes",
      ],
    },
  ];

  return (
    <div className="pricing__wrapper">
      <div className="pricing__title">Choose your plan</div>
      <div className="pricing__subtitle">Unlock endless possibilities</div>

      {/* List */}
      <div className="pricing__list">
        {dataPlan.map((e, index) => (
          <div className={`pricing__item ${e.type}`} key={index}>
            {/* Header */}
            <div className="pricing__header">
              <div className="pricing__name">{e.name}</div>
              <div className="pricing__description">{e.description}</div>
              <div className="pricing__price">
                $<span>{e.price}</span>
              </div>
            </div>

            {/* Action */}
            <div className="pricing__Action">
              <Button className="pricing__btn" full outline>
                Get Started
              </Button>
            </div>

            {/* Benefit */}
            <div className="pricing__content">
              {e.benefits.map((benefit, i) => (
                <div className="pricing__benefit" key={i}>
                  <FontAwesomeIcon icon={faCircleCheck} />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
        ;
      </div>
    </div>
  );
}

export default Pricing;
