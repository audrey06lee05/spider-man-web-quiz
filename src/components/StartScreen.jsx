/**
 * StartScreen.jsx
 *
 * Displays the quiz introduction, rules, and Start button.
 * It receives an onStart function from App and calls it when the user
 * chooses to begin the quiz.
 */

function StartScreen({ onStart }) {
  return (
    <div className="screen start-screen">
      <div className="badge">SPIDER-MAN UNIVERSE</div>
      <h1 className="title">
        Are You <span className="accent">Ready?</span>
      </h1>
      <p className="subtitle">
        8 questions · multiple choice · 20 sec per question
      </p>

      <div className="topic-grid">
        {[
          "Raimi Trilogy",
          "Amazing SM",
          "Into the Spider-Verse",
          "MCU",
          "No Way Home",
        ].map((t) => (
          <span key={t} className="topic-pill">
            {t}
          </span>
        ))}
      </div>

      <ul className="rules">
        <li>
          <span className="rule-icon">✓</span> Correct answer ={" "}
          <strong>+1 point</strong>
        </li>
        <li>
          <span className="rule-icon">✗</span> Time out ={" "}
          <strong>−1 point</strong>
        </li>
        <li>
          <span className="rule-icon">◉</span> Instant feedback after each pick
        </li>
      </ul>

      <p className="intro-note">
        Brand New Day picks up after No Way Home — prove you know your
        Spider-Man history before you watch it.
      </p>

      <button type="button" className="btn-start" onClick={onStart}>
        Swing In →
      </button>
    </div>
  );
}

export default StartScreen;
