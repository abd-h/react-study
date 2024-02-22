import React, { useState, useCallback } from "react";

import { QUESTIONS } from "../questions";
import { QuizStyles } from "./Styled-css";
import Question from "./Question";
import Summary from "./Summary";

const Quiz = () => {
  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuestionsIndex = userAnswers.length;

  const quizIsComplete = activeQuestionsIndex === QUESTIONS.length;

  const handleSelectAnswer = useCallback(function handleSelectAnswer(
    selectAnswer
  ) {
    setUserAnswers((prevUserAnswers) => [...prevUserAnswers, selectAnswer]);
  },
  []);

  const handleSkipAnswer = useCallback(
    () => () => handleSelectAnswer(null),
    [handleSelectAnswer]
  );

  if (quizIsComplete) {
    return <Summary userAnswers={userAnswers} />;
  }

  return (
    <QuizStyles>
      <Question
        key={activeQuestionsIndex}
        index={activeQuestionsIndex}
        onSelectAnswer={handleSelectAnswer}
        onSkipAnswer={handleSkipAnswer}
      />
    </QuizStyles>
  );
};

export default Quiz;
