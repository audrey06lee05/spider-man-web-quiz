/**
 * ResultsScreen.jsx
 *
 * Displays the completed quiz summary. It receives the final score and total
 * number of questions from App. Detailed results, Restart, and Home controls
 * will be added as the results feature develops.
 */

function ResultsScreen({ score, totalQuestions }) {
  return (
    <section>
      <h1>Quiz Complete</h1>
      <p>
        {score} / {totalQuestions}
      </p>
    </section>
  );
}

export default ResultsScreen;
