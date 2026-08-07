/**
 * CircularTimer.jsx
 *
 * Displays the remaining question time as a number inside an SVG progress
 * ring. The component does not manage or change the countdown itself; it only
 * receives the current and total seconds from QuizScreen and visualises them.
 */

function CircularTimer({ seconds, totalSeconds }) {
  const radius = 22;
  const circumference = 2 * Math.PI * radius;
  const progress = seconds / totalSeconds;
  const isRunningLow = seconds <= 5;

  return (
    <svg
      className="circular-timer"
      width="60"
      height="60"
      viewBox="0 0 60 60"
      aria-label={`${seconds} seconds remaining`}
      role="timer"
    >
      <circle
        cx="30"
        cy="30"
        r={radius}
        fill="none"
        stroke="#f0f0f0"
        strokeWidth="4"
      />
      <circle
        className="timer-progress"
        cx="30"
        cy="30"
        r={radius}
        fill="none"
        stroke={isRunningLow ? "#e31c23" : "#2563b8"}
        strokeWidth="4"
        strokeLinecap="round"
        strokeDasharray={circumference}
        strokeDashoffset={circumference * (1 - progress)}
      />
      <text
        x="30"
        y="35"
        textAnchor="middle"
        fill={isRunningLow ? "#e31c23" : "#1a1a2e"}
        fontSize="14"
        fontWeight="700"
      >
        {seconds}
      </text>
    </svg>
  );
}

export default CircularTimer;
