/**
 * ResultItem.jsx
 *
 * Displays the outcome of one completed quiz question. It receives one result
 * record and shows the question text and whether the answer was correct.
 * Additional answer and timeout details will be added later.
 */

function ResultItem({ result }) {
  return (
    <li>
      <p>{result.question}</p>
      <strong>{result.isCorrect ? "Correct" : "Incorrect"}</strong>
      {!result.isCorrect && (
        <div>
          <p>Your answer: {result.selectedAnswer}</p>
          <p>Correct answer: {result.correctAnswer}</p>
        </div>
      )}
    </li>
  );
}

export default ResultItem;
