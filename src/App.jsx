/**
 * App.jsx
 *
 * Coordinates the quiz screens and owns state shared across the quiz session,
 * including the current question, selected answer, score, results, and timer.
 */

import { useEffect, useState } from "react";
import "./App.css";
import StartScreen from "./components/StartScreen.jsx";
import questions from "./data/questions.json";
import QuizScreen from "./components/QuizScreen.jsx";
import ResultsScreen from "./components/ResultsScreen.jsx";

const TIMER_SECONDS = 20;

function App() {
  const [currentScreen, setCurrentScreen] = useState("start");
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [score, setScore] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [results, setResults] = useState([]);
  const [timeLeft, setTimeLeft] = useState(TIMER_SECONDS);
  const [hasTimedOut, setHasTimedOut] = useState(false);

  const currentQuestion = questions[currentQuestionIndex];

  useEffect(() => {
    const timerShouldStop =
      currentScreen !== "quiz" ||
      selectedAnswerIndex !== null ||
      hasTimedOut ||
      timeLeft <= 0;

    if (timerShouldStop) {
      return;
    }

    const timerId = setTimeout(() => {
      if (timeLeft === 1) {
        const timeoutResult = {
          questionId: currentQuestion.id,
          question: currentQuestion.question,
          selectedAnswer: null,
          correctAnswer:
            currentQuestion.answers[currentQuestion.correctAnswerIndex],
          isCorrect: false,
          timedOut: true,
        };

        setTimeLeft(0);
        setHasTimedOut(true);
        setResults((currentResults) => [
          ...currentResults,
          timeoutResult,
        ]);
        setScore((currentScore) => Math.max(0, currentScore - 1));

        return;
      }

      setTimeLeft((currentTime) => currentTime - 1);
    }, 1000);

    return () => {
      clearTimeout(timerId);
    };
  }, [
    currentScreen,
    selectedAnswerIndex,
    hasTimedOut,
    timeLeft,
    currentQuestion,
  ]);

  function handleStart() {
    resetQuizProgress();
    setCurrentScreen("quiz");
  }

  function handleAnswer(answerIndex) {
    // Prevent one question from awarding points or recording results twice.
    if (selectedAnswerIndex !== null || hasTimedOut) {
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
    const questionIsComplete =
      selectedAnswerIndex !== null || hasTimedOut;

    if (!questionIsComplete) {
      return;
    }

    if (currentQuestionIndex >= questions.length - 1) {
      setCurrentScreen("results");
      return;
    }

    setCurrentQuestionIndex((currentIndex) => currentIndex + 1);
    setSelectedAnswerIndex(null);
    setHasTimedOut(false);
    setTimeLeft(TIMER_SECONDS);
  }

  function resetQuizProgress() {
    setSelectedAnswerIndex(null);
    setScore(0);
    setCurrentQuestionIndex(0);
    setResults([]);
    setTimeLeft(TIMER_SECONDS);
    setHasTimedOut(false);
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
    <main className="app">
      {currentScreen === "start" && <StartScreen onStart={handleStart} />}

      {currentScreen === "quiz" && (
        <QuizScreen
          question={currentQuestion}
          questionNumber={currentQuestionIndex + 1}
          totalQuestions={questions.length}
          selectedAnswerIndex={selectedAnswerIndex}
          score={score}
          timeLeft={timeLeft}
          hasTimedOut={hasTimedOut}
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
