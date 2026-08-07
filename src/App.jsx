/**
 * App.jsx
 *
 * Coordinates the quiz screens and owns state shared across the quiz session,
 * including the current question, selected answer, and score.
 */

import { useState } from "react";
import "./App.css";
import StartScreen from "./components/StartScreen.jsx";
import questions from "./data/questions.json";
import QuizScreen from "./components/QuizScreen.jsx";

function App() {
  const [currentScreen, setCurrentScreen] = useState("start");

  // null means the user has not selected an answer yet.
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);

  const [score, setScore] = useState(0);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const currentQuestion = questions[currentQuestionIndex];

  function handleStart() {
    setCurrentScreen("quiz");
  }

  function handleAnswer(answerIndex) {
    // Prevent one question from awarding points more than once.
    if (selectedAnswerIndex !== null) {
      return;
    }

    setSelectedAnswerIndex(answerIndex);

    if (answerIndex === currentQuestion.correctAnswerIndex) {
      setScore((currentScore) => currentScore + 1);
    }
  }

  function handleNext() {
    // Next is only valid after the current question has been answered.
    if (selectedAnswerIndex === null) {
      return;
    }

    // Stop at the final question until the results screen is implemented.
    if (currentQuestionIndex >= questions.length - 1) {
      return;
    }

    setCurrentQuestionIndex((currentIndex) => currentIndex + 1);
    setSelectedAnswerIndex(null);
  }

  return (
    <main>
      {currentScreen === "start" ? (
        <StartScreen onStart={handleStart} />
      ) : (
        <QuizScreen
          question={currentQuestion}
          selectedAnswerIndex={selectedAnswerIndex}
          score={score}
          onAnswer={handleAnswer}
          onNext={handleNext}
        />
      )}
    </main>
  );
}

export default App;
