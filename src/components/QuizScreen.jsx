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

function QuizScreen({ question, selectedAnswerIndex, onAnswer }) {
  return (
    <section>
      <QuestionCard
        question={question}
        selectedAnswerIndex={selectedAnswerIndex}
        onAnswer={onAnswer}
      />
    </section>
  );
}

export default QuizScreen;
