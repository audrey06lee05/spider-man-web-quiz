/**
 * ResultsScreen.jsx
 *
 * Displays the completed quiz summary. It receives the final score and total
 * number of questions from App. Detailed results, Restart, and Home controls
 * will be added as the results feature develops.
 */

import ResultItem from "./ResultItem.jsx";

function ResultsScreen({ results, score, totalQuestions, onRestart, onHome }) {
  const correctAnswerCount = results.filter(
    (result) => result.isCorrect,
  ).length;
  const percentage = Math.round(
    (correctAnswerCount / totalQuestions) * 100,
  );

  const grade =
    percentage >= 90
      ? "S"
      : percentage >= 75
        ? "A"
        : percentage >= 60
          ? "B"
          : percentage >= 40
            ? "C"
            : "F";

  const verdict =
    percentage >= 90
      ? "True Spider-Man fan 🕷️"
      : percentage >= 75
        ? "Ready for Brand New Day!"
        : percentage >= 60
          ? "Almost there — a quick recap won't hurt"
          : percentage >= 40
            ? "Watch No Way Home again first"
            : "Start from the Raimi trilogy 😅";

  return (
    <section className="screen results-screen">
      <header className="results-header">
        <div className={`grade-badge grade-${grade.toLowerCase()}`}>
          {grade}
        </div>
        <h1 className="results-title">Quiz Complete</h1>

        <div className="results-summary">
          <p className="results-score">
            {score} <span>/ {totalQuestions}</span>
          </p>
          <p className="results-percentage">
            {percentage}% · {verdict}
          </p>
          <p className="correct-total">
            {correctAnswerCount} correct answers
          </p>
        </div>
      </header>

      <ul className="results-list">
        {results.map((result, resultIndex) => (
          <ResultItem
            key={result.questionId}
            result={result}
            questionNumber={resultIndex + 1}
          />
        ))}
      </ul>

      <div className="results-actions">
        <button className="btn-start" type="button" onClick={onRestart}>
          Try Again
        </button>

        <button className="btn-home" type="button" onClick={onHome}>
          Home
        </button>
      </div>
    </section>
  );
}

export default ResultsScreen;
