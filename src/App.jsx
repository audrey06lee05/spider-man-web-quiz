import { useState } from "react";
import "./App.css";
import StartScreen from "./components/StartScreen.jsx";
import questions from "./data/questions.json"; //json import
import QuizScreen from "./components/QuizScreen.jsx";

function App() {
  // Track which screen is currently being shown.
  const [currentScreen, setCurrentScreen] = useState("start");

  // Move from the start screen to the quiz screen when the user begins.
  function handleStart() {
    setCurrentScreen("quiz");
  }

  const currentQuestion = questions[0];

  return (
    <main>
      {currentScreen === "start" ? (
        <StartScreen onStart={handleStart} />
      ) : (
        <QuizScreen question={currentQuestion} />
      )}
    </main>
  );
}

export default App;
