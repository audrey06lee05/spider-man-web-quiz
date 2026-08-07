/**
 * ResultItem.jsx
 *
 * Displays the outcome of one completed quiz question, including its status,
 * selected answer, correct answer, and timeout information.
 */

function ResultItem({ result, questionNumber }) {
  const status = result.timedOut
    ? "Timed out"
    : result.isCorrect
      ? "Correct"
      : "Incorrect";

  const selectedAnswer = result.timedOut ? "No answer" : result.selectedAnswer;

  return (
    <li className={`result-item result-${status.toLowerCase().replace(" ", "-")}`}>
      <span className="result-number">Q{questionNumber}</span>

      <div className="result-content">
        <div className="result-heading">
          <p className="result-question">{result.question}</p>
          <strong className="result-status">
            {result.isCorrect ? "✓" : result.timedOut ? "⏱" : "✗"}
            <span className="visually-hidden">{status}</span>
          </strong>
        </div>

        {!result.isCorrect && (
          <div className="result-details">
            <p>Your answer: {selectedAnswer}</p>
            <p>Correct answer: {result.correctAnswer}</p>
          </div>
        )}
      </div>
    </li>
  );
}

export default ResultItem;
