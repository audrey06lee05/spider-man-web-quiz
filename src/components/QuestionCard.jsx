/**
 * QuestionCard.jsx
 *
 * Displays one quiz question and its answer options.
 * It receives question data through props so the same component can be
 * reused as the user progresses through the quiz.
 */

function QuestionCard({
  question,
  selectedAnswerIndex,
  hasTimedOut,
  onAnswer,
  onNext,
}) {
  const questionIsComplete = selectedAnswerIndex !== null || hasTimedOut;
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
                disabled={questionIsComplete}
                onClick={() => onAnswer(answerIndex)}
              >
                {answer}
              </button>
            </li>
          );
        })}
      </ul>
      {questionIsComplete && (
        <p>
          {hasTimedOut
            ? `Time's up. The correct answer was: ${correctAnswer}`
            : isCorrect
              ? "Correct!"
              : `Incorrect. The correct answer was: ${correctAnswer}`}
        </p>
      )}
      {questionIsComplete && (
        <button type="button" onClick={onNext}>
          Next Question
        </button>
      )}
    </section>
  );
}

export default QuestionCard;
