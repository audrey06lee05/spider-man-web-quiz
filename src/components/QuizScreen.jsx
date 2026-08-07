/**
 * QuizScreen.jsx
 *
 * Displays the active quiz stage and arranges the components needed while
 * the user is taking the quiz. It receives the current question and other
 * quiz information from App, then passes the question to QuestionCard.
 *
 * This component will eventually display the question progress, current
 * score, countdown timer, Quit button, and question card.
 */

import QuestionCard from "./QuestionCard.jsx";

function QuizScreen({
  question,
  selectedAnswerIndex,
  score,
  onAnswer,
  onNext,
  onQuit,
}) {
  return (
    <section>
      <QuestionCard
        question={question}
        selectedAnswerIndex={selectedAnswerIndex}
        onAnswer={onAnswer}
        onNext={onNext}
      />
      <p>Score: {score}</p>
      <button type="button" onClick={onQuit}>
        Quit
      </button>
    </section>
  );
}

export default QuizScreen;
