import { QUESTIONS } from "../questions";
import quizIsCompleteImg from "../assets/quiz-complete.png";
import { QuizIscomplete } from "./Styled-css";

const Summary = ({ userAnswers }) => {
  const skippedAnswers = userAnswers.filter((answer) => answer === null);

  const correctAnswers = userAnswers.filter(
    (answer, index) => answer === QUESTIONS[index].answers[0]
  );
    
    const correctAnswersShare = Math.round((correctAnswers.length / userAnswers.length) * 100);

    const skippedAnswersShare = Math.round((correctAnswers.length / userAnswers.length) * 100);

    const wrongAnswersShare = 100 - skippedAnswersShare - correctAnswersShare;

  return (
    <QuizIscomplete id="summary">
      <img src={quizIsCompleteImg} alt={`${quizIsCompleteImg} logo`} />
      <h2>Quiz Completed</h2>
      <div id="summary-stats">
        <p>
                  <span className="number">{skippedAnswersShare }%</span>
          <span className="text">skipped</span>
        </p>
        <p>
                  <span className="number">{ correctAnswersShare }%</span>
          <span className="text">answered correctly</span>
        </p>
        <p>
                  <span className="number">{ wrongAnswersShare }%</span>
          <span className="text">answered incorrectly</span>
        </p>
      </div>
      <ol>
        {userAnswers.map((answer, index) => {
          let cssClass = "user-answer";
          if (answer === null) {
            cssClass += " skipped";
          } else if (answer === QUESTIONS[index].answers[0]) {
            cssClass += " correct";
          } else {
            cssClass += " wrong";
          }
          return (
            <li key={index}>
              <h3>{index + 1} </h3>
              <p className="question">{QUESTIONS[index].text} </p>
              <p className={cssClass}>{answer ?? "skiped"} </p>
            </li>
          );
        })}
      </ol>
    </QuizIscomplete>
  );
};

export default Summary;
