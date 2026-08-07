/**
 * QuizScreen.jsx
 *
 * Displays the active quiz stage and arranges the components needed while
 * the user is taking the quiz. It receives the current question and other
 * quiz information from App, then passes the question to QuestionCard.
 *
 * This component will eventually display the question progress, current
 * score, countdown timer, Quit button, and question card.
 */

import QuestionCard from "./QuestionCard.jsx";
import CircularTimer from "./CircularTimer.jsx";

const TIMER_SECONDS = 20;

function QuizScreen({
  question,
  questionNumber,
  totalQuestions,
  selectedAnswerIndex,
  score,
  timeLeft,
  hasTimedOut,
  onAnswer,
  onNext,
  onQuit,
}) {
  const progressPercentage = (questionNumber / totalQuestions) * 100;

  return (
    <section className="screen question-screen">
      <header className="quiz-header">
        <div className="question-progress">
          <span className="question-counter">
            {questionNumber} / {totalQuestions}
          </span>

          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
        </div>

        <p className="score-live">
          Score <strong>{score}</strong>
        </p>

        <CircularTimer
          seconds={timeLeft}
          totalSeconds={TIMER_SECONDS}
        />

        <button className="btn-quit" type="button" onClick={onQuit}>
          Quit
        </button>
      </header>

      <QuestionCard
        question={question}
        selectedAnswerIndex={selectedAnswerIndex}
        hasTimedOut={hasTimedOut}
        onAnswer={onAnswer}
        onNext={onNext}
      />
    </section>
  );
}

export default QuizScreen;
