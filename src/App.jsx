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

  const currentQuestion = questions[0];

  // Move from the start screen to the quiz screen when the user begins.
  function handleStart() {
    setCurrentScreen("quiz");
  }

  // Save the index reported by the clicked answer button.
  function handleAnswer(answerIndex) {
    setSelectedAnswerIndex(answerIndex);
  }

  return (
    <main>
      {currentScreen === "start" ? (
        <StartScreen onStart={handleStart} />
      ) : (
        <QuizScreen
          question={currentQuestion}
          selectedAnswerIndex={selectedAnswerIndex}
          onAnswer={handleAnswer}
        />
      )}
    </main>
  );
}

export default App;
