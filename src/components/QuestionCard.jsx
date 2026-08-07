/**
 * QuestionCard.jsx
 *
 * Displays one quiz question and its answer options.
 * It receives question data through props so the same component can be
 * reused as the user progresses through the quiz.
 */

function QuestionCard({ question, selectedAnswerIndex, onAnswer, onNext }) {
  const hasAnswered = selectedAnswerIndex !== null;
  const isCorrect = selectedAnswerIndex === question.correctAnswerIndex;
  const correctAnswer = question.answers[question.correctAnswerIndex];

  return (
    <section>
      <h2>{question.question}</h2>
      <ul>
        {question.answers.map((answer, answerIndex) => {
          return (
            <li key={answer}>
              <button
                type="button"
                disabled={hasAnswered}
                onClick={() => onAnswer(answerIndex)}
              >
                {answer}
              </button>
            </li>
          );
        })}
      </ul>
      {hasAnswered && (
        <p>
          {isCorrect
            ? "Correct!"
            : `Incorrect. The correct answer was: ${correctAnswer}`}
        </p>
      )}
      {hasAnswered && (
        <button type="button" onClick={onNext}>
          Next Question
        </button>
      )}
    </section>
  );
}

export default QuestionCard;
