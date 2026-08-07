import { useState } from "react";
import "./App.css";
import StartScreen from "./components/StartScreen.jsx";
import questions from "./data/questions.json"; // json import
import QuizScreen from "./components/QuizScreen.jsx";

function App() {
  // Track which screen is currently being shown.
  const [currentScreen, setCurrentScreen] = useState("start");

  // Store the index of the answer selected for the current question.
  // null means the user has not selected an answer yet.
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);

  // Track the user's points across the entire quiz session.
  const [score, setScore] = useState(0);

  const currentQuestion = questions[0];

  // Move from the start screen to the quiz screen when the user begins.
  function handleStart() {
    setCurrentScreen("quiz");
  }

  // Save the selected answer and award one point when it is correct.
  function handleAnswer(answerIndex) {
    // Ignore additional answer attempts for the same question.
    if (selectedAnswerIndex !== null) {
      return;
    }

    setSelectedAnswerIndex(answerIndex);

    if (answerIndex === currentQuestion.correctAnswerIndex) {
      setScore((currentScore) => currentScore + 1);
    }
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
        />
      )}
    </main>
  );
}

export default App;
