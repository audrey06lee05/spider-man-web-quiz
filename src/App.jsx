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
import ResultsScreen from "./components/ResultsScreen.jsx";

function App() {
  const [currentScreen, setCurrentScreen] = useState("start");

  // null means the user has not selected an answer yet.
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);

  const [score, setScore] = useState(0);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const currentQuestion = questions[currentQuestionIndex];

  const [results, setResults] = useState([]);

  function handleStart() {
    resetQuizProgress();
    setCurrentScreen("quiz");
  }

  function handleAnswer(answerIndex) {
    // Prevent one question from awarding points or recording results twice.
    if (selectedAnswerIndex !== null) {
      return;
    }

    const isCorrect = answerIndex === currentQuestion.correctAnswerIndex;

    const result = {
      questionId: currentQuestion.id,
      question: currentQuestion.question,
      selectedAnswer: currentQuestion.answers[answerIndex],
      correctAnswer:
        currentQuestion.answers[currentQuestion.correctAnswerIndex],
      isCorrect,
      timedOut: false,
    };

    setSelectedAnswerIndex(answerIndex);

    setResults((currentResults) => [...currentResults, result]);

    if (isCorrect) {
      setScore((currentScore) => currentScore + 1);
    }
  }

  function handleNext() {
    if (selectedAnswerIndex === null) {
      return;
    }

    if (currentQuestionIndex >= questions.length - 1) {
      setCurrentScreen("results");
      return;
    }

    setCurrentQuestionIndex((currentIndex) => currentIndex + 1);
    setSelectedAnswerIndex(null);
  }

  function resetQuizProgress() {
    setSelectedAnswerIndex(null);
    setScore(0);
    setCurrentQuestionIndex(0);
    setResults([]);
  }

  function handleRestart() {
    resetQuizProgress();
    setCurrentScreen("quiz");
  }

  function handleHome() {
    resetQuizProgress();
    setCurrentScreen("start");
  }

  return (
    <main>
      {currentScreen === "start" && <StartScreen onStart={handleStart} />}

      {currentScreen === "quiz" && (
        <QuizScreen
          question={currentQuestion}
          selectedAnswerIndex={selectedAnswerIndex}
          score={score}
          onAnswer={handleAnswer}
          onNext={handleNext}
          onQuit={handleHome}
        />
      )}

      {currentScreen === "results" && (
        <ResultsScreen
          results={results}
          score={score}
          totalQuestions={questions.length}
          onRestart={handleRestart}
          onHome={handleHome}
        />
      )}
    </main>
  );
}

export default App;
