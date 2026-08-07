/**
 * ResultItem.jsx
 *
 * Displays the outcome of one completed quiz question, including its status,
 * selected answer, correct answer, and timeout information.
 */

function ResultItem({ result }) {
  const status = result.timedOut
    ? "Timed out"
    : result.isCorrect
      ? "Correct"
      : "Incorrect";

  const selectedAnswer = result.timedOut ? "No answer" : result.selectedAnswer;
  return (
    <li>
      <p>{result.question}</p>
      <strong>{status}</strong>
      {!result.isCorrect && (
        <div>
          <p>Your answer: {selectedAnswer}</p>
          <p>Correct answer: {result.correctAnswer}</p>
        </div>
      )}
    </li>
  );
}

export default ResultItem;
