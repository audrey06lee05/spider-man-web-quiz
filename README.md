# 🕷️ Spider-Man Web Quiz

✨ A responsive browser-based quiz that challenges players with eight multiple-choice questions from across the Spider-Man film universe.

Players receive immediate feedback after every answer, can track their score and progress in real time, and have 20 seconds to answer each question. At the end of the quiz, a detailed results screen shows the final score, number of correct answers, and a question-by-question breakdown.

Built with React and Vite, with quiz content stored separately as JSON and application state managed using React Hooks.

## 🗣️ Languages & Technologies

- React 19
- JavaScript (ES6+)
- HTML5 and semantic JSX
- CSS3 with responsive media queries
- JSON for quiz content
- Vite for development and production builds
- ESLint for code-quality checks

## ⚜️ Key Features

- **Three-stage quiz experience** — dedicated opening, question, and results screens
- **Immediate answer feedback** — correct answers turn blue, selected incorrect answers turn red, and the correct answer is revealed
- **20-second countdown** — each question has a circular timer that stops after an answer is selected
- **Timeout handling** — unanswered questions reveal the correct answer and subtract one point without allowing a negative score
- **Manual question progression** — feedback remains visible until the player selects **Next Question**
- **Live score and progress** — the current score, question number, and progress bar update throughout the quiz
- **Detailed result history** — the final screen identifies correct, incorrect, and timed-out questions and shows the selected and correct answers when needed
- **Quiz controls** — players can quit and clear their progress, try the quiz again, or return home
- **Responsive design** — layouts adapt to desktop, tablet, and mobile screens down to 320px wide
- **Accessible interaction states** — semantic buttons, disabled answer states, timer labelling, visually hidden status text, and reduced-motion support

## 🏗️ Architecture

The app uses a component-based structure with one central state owner:

| File / Component | Responsibility |
|---|---|
| `App` | Owns the quiz session state, controls screen transitions, runs the countdown, checks answers, updates the score, and records results |
| `StartScreen` | Presents the quiz introduction, topics, rules, and start action |
| `QuizScreen` | Arranges the active question header, progress, score, timer, Quit control, and question card |
| `CircularTimer` | Converts the remaining time into an accessible SVG progress ring |
| `QuestionCard` | Renders a reusable question card, answer options, answer states, feedback, and Next Question action |
| `ResultsScreen` | Calculates the correct-answer total, percentage, grade, and verdict, then renders the final summary and navigation controls |
| `ResultItem` | Displays the outcome of one question, including timeout and incorrect-answer details |
| `questions.json` | Stores quiz questions, answer options, IDs, and the index of each correct answer separately from the UI logic |

### Architecture Decisions

- **A single source of truth in `App`** — state shared by multiple screens stays in their closest common parent. This prevents the score, timer, question index, and result history from becoming inconsistent across components.
- **Screen state instead of a router** — the experience is a short, linear flow with no independently navigable URLs, so a `currentScreen` state value keeps navigation simple without adding an unnecessary routing dependency.
- **Presentational child components** — screens and cards receive data and event handlers through props. They focus on displaying the interface while `App` owns session-changing logic.
- **Quiz data separated from components** — keeping questions in JSON makes the content easier to update or replace without editing rendering logic.
- **Derived values are calculated when needed** — correct-answer totals, percentages, grades, answer states, and progress widths are derived from existing state instead of being stored as additional state that could become out of sync.
- **One recorded result per question** — answer buttons are disabled after completion, and answer handling guards against duplicate submissions before changing the score or result history.
- **Timer cleanup with `useEffect`** — each scheduled timeout is cleared when dependencies change or the component reruns its effect, preventing overlapping countdowns and stale updates.
- **Client-side answer data** — correct answer indexes are intentionally included in the JSON because this is a casual frontend quiz. A competitive or security-sensitive quiz would validate answers on a backend instead.

## 🌐 Live Demo

**[https://audrey06lee05.github.io/spider-man-web-quiz/](https://audrey06lee05.github.io/spider-man-web-quiz/)**

Deployed as a static Vite application using GitHub Pages.

## 🔧 Running Locally (for Development)

1. Clone the repository:

   ```bash
   git clone https://github.com/audrey06lee05/spider-man-web-quiz.git
   ```

2. Enter the project directory:

   ```bash
   cd spider-man-web-quiz
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Start the Vite development server:

   ```bash
   npm run dev
   ```

5. Open the local URL shown in the terminal, usually `http://localhost:5173`.

## ✅ Quality Checks

Run the linter:

```bash
npm run lint
```

Create a production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## 📌 How to Use

#### 🕸️ Start the Quiz

1. Review the quiz topics and scoring rules on the opening screen
2. Press **Swing In →**

#### 🎯 Answer Questions

1. Select one of the four answers before the 20-second timer reaches zero
2. Review the immediate correct or incorrect feedback
3. Press **Next Question** when you are ready to continue
4. Use **Quit** at any time to return home and clear the current attempt

#### 📊 Review Results

- View the final score and number of correct answers
- Review the status of all eight questions
- See your selected answer and the correct answer for mistakes and timeouts
- Press **Try Again** to start a fresh attempt or **Home** to return to the opening screen
