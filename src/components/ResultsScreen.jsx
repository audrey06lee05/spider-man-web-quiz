/**
 * ResultsScreen.jsx
 *
 * Displays the completed quiz summary. It receives the final score and total
 * number of questions from App. Detailed results, Restart, and Home controls
 * will be added as the results feature develops.
 */

import ResultItem from "./ResultItem.jsx";

function ResultsScreen({ results, score, totalQuestions }) {
  return (
    <section>
      <h1>Quiz Complete</h1>
      <p>
        {score} / {totalQuestions}
      </p>
      <ul>
        {results.map((result) => (
          <ResultItem key={result.questionId} result={result} />
        ))}
      </ul>
    </section>
  );
}

export default ResultsScreen;
