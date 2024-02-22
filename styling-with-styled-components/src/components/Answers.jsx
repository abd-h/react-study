import { useRef } from "react";

import { ButtonCss, AnswersStyled } from "./Styled-css";

const Answers = ({ answers, answerState, selectedAnswers, onSelect }) => {
  const shuffledAnswers = useRef();

  if (!shuffledAnswers.current) {
    shuffledAnswers.current = [...answers];
    shuffledAnswers.current.sort(() => Math.random() - 0.5);
  }

    return (
      <div>
          <ul id="answers">
            {shuffledAnswers.current.map((answer) => {
              const isSelected = selectedAnswers === answer;
              let cssClass = "";

              if (isSelected === "answers" && isSelected) {
                cssClass = "selected";
              }
              if (
                (answerState === "correct" || answerState === "wrong") &&
                isSelected
              ) {
                cssClass = answerState;
              }
              console.log(answer);
              return (
                <li key={answer} className={answer}>
                  <ButtonCss
                    onClick={() => onSelect(answer)}
                    className={cssClass}
                    disabled={answerState !== ""}
                  >
                    {answer}
                  </ButtonCss>
                </li>
              );
            })}
          </ul>
      </div>
    );
};

export default Answers;
