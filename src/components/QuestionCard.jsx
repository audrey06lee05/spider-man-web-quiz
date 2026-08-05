/**
 * QuestionCard.jsx
 *
 * Displays one quiz question and its answer options.
 * It receives question data through props so the same component can be
 * reused as the user progresses through the quiz.
 */

function QuestionCard({ question }) {
  return (
    <section>
      <h2>{question.question}</h2>
      <ul>
        {question.answers.map((answer) => {
          return (
            <li key={answer}>
              <button type="button">{answer}</button>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default QuestionCard;
