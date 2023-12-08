import React, { useState } from "react";
import { arrowdown, arrowup } from "../helper/icons";
import questions from "../helper/data.js";

const IndividualCard = ({ question, answer }) => {
  const [visible, setVisible] = useState(false);

  const handleClick = () => {
    setVisible(!visible);
  };

  return (
    <div className="card-group">
      <div className="card">
        <div className="ques-answer">
          <h5>{question}</h5>
          <button onClick={handleClick} className="btn-minus">
            {!visible ? arrowdown : arrowup}
          </button>
        </div>
        <p>{visible ? answer : ""}</p>
      </div>
    </div>
  );
};

const Card = ({ data }) => {
  return (
    <>
      {questions[data].map(({ question, answer, id }) => (
        <IndividualCard key={id} question={question} answer={answer} />
      ))}
    </>
  );
};

export default Card;
