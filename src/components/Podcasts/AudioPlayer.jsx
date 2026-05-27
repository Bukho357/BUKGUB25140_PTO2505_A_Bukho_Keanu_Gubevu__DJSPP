import { useEffect } from "react";
import "./AudioPlayer.css";
import { useAudioPlayer } from "../../context/AudioContext";

function AudioPlayer() {
  const {
    currentTrack,
    isPlaying,
    progress,
    duration,
    volume,
    speed,
    isExpanded,

    togglePlay,
    handleSeek,
    nextTrack,
    previousTrack,
    changeVolume,
    changeSpeed,
    setIsExpanded,
  } = useAudioPlayer();

  // ✅ SINGLE SOURCE OF LAYOUT CONTROL
  useEffect(() => {
    document.documentElement.style.setProperty(
      "--player-height",
      isExpanded ? "220px" : "90px",
    );
  }, [isExpanded]);

  // Hide player if no track selected
  if (!currentTrack) return null;

  // FORMAT TIME
  const formatTime = (time) => {
    if (!time) return "0:00";

    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60)
      .toString()
      .padStart(2, "0");

    return `${minutes}:${seconds}`;
  };

  return (
    <div className={`audio-player ${isExpanded ? "expanded" : "mini"}`}>
      <h3>{currentTrack.title}</h3>

      <input
        type="range"
        min="0"
        max={duration || 0}
        value={progress}
        onChange={(e) => handleSeek(Number(e.target.value))}
      />

      <div className="time">
        {formatTime(progress)} / {formatTime(duration)}
      </div>

      <div className="controls">
        <button onClick={previousTrack}>⏮</button>
        <button onClick={togglePlay}>{isPlaying ? "⏸ Pause" : "▶ Play"}</button>
        <button onClick={nextTrack}>⏭</button>
      </div>

      <div className="extras">
        <label>🔊</label>

        <input
          type="range"
          min="0"
          max="1"
          step="0.1"
          value={volume}
          onChange={(e) => changeVolume(Number(e.target.value))}
        />

        <select
          value={speed}
          onChange={(e) => changeSpeed(Number(e.target.value))}
        >
          <option value="0.5">0.5x</option>
          <option value="1">1x</option>
          <option value="1.5">1.5x</option>
          <option value="2">2x</option>
        </select>

        <button onClick={() => setIsExpanded(!isExpanded)}>
          {isExpanded ? "Mini" : "Expand"}
        </button>
      </div>
    </div>
  );
}

export default AudioPlayer;
