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

  return (
    <section className="screen results-screen">
      <header className="results-header">
        <h1>Quiz Complete</h1>

        <div className="results-summary">
          <p>Final score: {score}</p>
          <p>
            Correct answers: {correctAnswerCount} / {totalQuestions}
          </p>
        </div>
      </header>

      <ul className="results-list">
        {results.map((result) => (
          <ResultItem key={result.questionId} result={result} />
        ))}
      </ul>

      <div className="results-actions">
        <button type="button" onClick={onRestart}>
          Try Again
        </button>

        <button type="button" onClick={onHome}>
          Home
        </button>
      </div>
    </section>
  );
}

export default ResultsScreen;
