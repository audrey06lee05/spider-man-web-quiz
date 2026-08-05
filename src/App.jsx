import { useState } from "react";
import "./App.css";
import StartScreen from "./components/StartScreen.jsx";

function App() {
  const [currentScreen, setCurrentScreen] = useState("start");

  function handleStart() {
    setCurrentScreen("quiz");
  }

  return (
    <main>
      {currentScreen === "start" ? (
        <StartScreen onStart={handleStart} />
      ) : (
        <h1>Quiz screen coming next</h1>
      )}
    </main>
  );
}

export default App;
