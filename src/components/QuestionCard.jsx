/**
 * QuestionCard.jsx
 *
 * Displays one quiz question and its answer options.
 * It receives question data through props so the same component can be
 * reused as the user progresses through the quiz.
 */

const ANSWER_LABELS = ["A", "B", "C", "D"];

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
    <section className="question-card">
      <h2 className="question-text">{question.question}</h2>
      <ul className="answer-list">
        {question.answers.map((answer, answerIndex) => {
          const isCorrectAnswer =
            answerIndex === question.correctAnswerIndex;
          const isSelectedAnswer = answerIndex === selectedAnswerIndex;

          let answerState = "available";

          if (questionIsComplete) {
            if (isCorrectAnswer) {
              answerState = "correct";
            } else if (isSelectedAnswer) {
              answerState = "wrong";
            } else {
              answerState = "dimmed";
            }
          }

          return (
            <li key={answer}>
              <button
                type="button"
                className={`answer-button answer-${answerState}`}
                disabled={questionIsComplete}
                onClick={() => onAnswer(answerIndex)}
              >
                <span className="answer-label">
                  {ANSWER_LABELS[answerIndex]}
                </span>
                <span className="answer-text">{answer}</span>

                {questionIsComplete && isCorrectAnswer && (
                  <span className="answer-badge">✓ Correct</span>
                )}

                {questionIsComplete && isSelectedAnswer && !isCorrectAnswer && (
                  <span className="answer-badge">✗ Wrong</span>
                )}
              </button>
            </li>
          );
        })}
      </ul>
      {questionIsComplete && (
        <p
          className={`feedback-strip ${
            !hasTimedOut && isCorrect ? "feedback-correct" : "feedback-wrong"
          }`}
        >
          {hasTimedOut
            ? `Time's up. The correct answer was: ${correctAnswer}`
            : isCorrect
              ? "🕷️ Correct! +1 to your score."
              : `Incorrect. The correct answer was: ${correctAnswer}`}
        </p>
      )}
      {questionIsComplete && (
        <button className="btn-next" type="button" onClick={onNext}>
          Next Question
        </button>
      )}
    </section>
  );
}

export default QuestionCard;
