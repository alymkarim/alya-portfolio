import { useEffect, useState } from "react";
import { Bug, Play, RotateCcw } from "lucide-react";

type BugPosition = {
  id: number;
  x: number;
  y: number;
};

const GAME_DURATION = 30;

function BugGame() {
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(GAME_DURATION);
  const [isPlaying, setIsPlaying] = useState(false);
  const [bug, setBug] = useState<BugPosition | null>(null);

  function createBug() {
    setBug({
      id: Date.now(),
      x: Math.random() * 85,
      y: Math.random() * 75,
    });
  }

  function startGame() {
    setScore(0);
    setTimeLeft(GAME_DURATION);
    setIsPlaying(true);
    createBug();
  }

  function squashBug() {
    if (!isPlaying) return;

    setScore((currentScore) => currentScore + 1);
    createBug();
  }

  useEffect(() => {
    if (!isPlaying) return;

    const timer = window.setInterval(() => {
      setTimeLeft((currentTime) => {
        if (currentTime <= 1) {
          window.clearInterval(timer);
          setIsPlaying(false);
          setBug(null);
          return 0;
        }

        return currentTime - 1;
      });
    }, 1000);

    return () => window.clearInterval(timer);
  }, [isPlaying]);

  useEffect(() => {
    if (!isPlaying) return;

    const bugMovement = window.setInterval(() => {
      createBug();
    }, 1200);

    return () => window.clearInterval(bugMovement);
  }, [isPlaying]);

  return (
    <div className="bug-game">
      <div className="game-header">
        <div>
          <span>Score</span>
          <strong>{score}</strong>
        </div>

        <div>
          <span>Time</span>
          <strong>{timeLeft}s</strong>
        </div>
      </div>

      <div className="game-board">
        {!isPlaying && (
          <div className="game-overlay">
            <Bug size={48} />

            <h3>{timeLeft === 0 ? "Deployment complete" : "Bug Squasher"}</h3>

            <p>
              {timeLeft === 0
                ? `You fixed ${score} bugs before production went down.`
                : "Fix as many bugs as possible before time runs out."}
            </p>

            <button className="game-button" onClick={startGame}>
              {timeLeft === 0 ? <RotateCcw size={18} /> : <Play size={18} />}
              {timeLeft === 0 ? "Play again" : "Start game"}
            </button>
          </div>
        )}

        {isPlaying && bug && (
          <button
            className="bug-target"
            style={{
              left: `${bug.x}%`,
              top: `${bug.y}%`,
            }}
            onClick={squashBug}
            aria-label="Squash bug"
          >
            <Bug size={34} />
          </button>
        )}
      </div>
    </div>
  );
}

export default BugGame;