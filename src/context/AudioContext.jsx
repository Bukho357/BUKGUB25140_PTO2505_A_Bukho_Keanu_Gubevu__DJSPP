import { createContext, useContext, useEffect, useRef, useState } from "react";

const AudioPlayerContext = createContext();

export function AudioProvider({ children }) {
  const audioRef = useRef(new Audio());

  const [queue, setQueue] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  const [volume, setVolume] = useState(1);
  const [speed, setSpeed] = useState(1);

  const [isExpanded, setIsExpanded] = useState(false);

  const currentTrack = queue[currentIndex];

  const playQueue = (tracks, startIndex = 0) => {
    setQueue(tracks);
    setCurrentIndex(startIndex);
  };

  // BODY LAYOUT CONTROL (FIX OVERLAP)
  useEffect(() => {
    if (isExpanded) {
      document.body.classList.add("player-open");
    } else {
      document.body.classList.remove("player-open");
    }

    return () => {
      document.body.classList.remove("player-open");
    };
  }, [isExpanded]);

  // LOAD TRACK
  useEffect(() => {
    if (!currentTrack) return;

    audioRef.current.src = currentTrack.file;

    audioRef.current
      .play()
      .then(() => setIsPlaying(true))
      .catch(() => setIsPlaying(false));

    localStorage.setItem("queue", JSON.stringify(queue));
    localStorage.setItem("currentIndex", currentIndex);
  }, [currentTrack]);

  // RESTORE SESSION
  useEffect(() => {
    const savedQueue = JSON.parse(localStorage.getItem("queue"));
    const savedIndex = Number(localStorage.getItem("currentIndex"));

    if (savedQueue?.length) {
      setQueue(savedQueue);
      setCurrentIndex(savedIndex || 0);
    }
  }, []);

  // AUDIO EVENTS
  useEffect(() => {
    const audio = audioRef.current;

    const updateProgress = () => setProgress(audio.currentTime);
    const loaded = () => setDuration(audio.duration);
    const ended = () => nextTrack();

    audio.addEventListener("timeupdate", updateProgress);
    audio.addEventListener("loadedmetadata", loaded);
    audio.addEventListener("ended", ended);

    return () => {
      audio.removeEventListener("timeupdate", updateProgress);
      audio.removeEventListener("loadedmetadata", loaded);
      audio.removeEventListener("ended", ended);
    };
  }, [queue, currentIndex]);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().then(() => setIsPlaying(true));
    }
  };

  const handleSeek = (value) => {
    audioRef.current.currentTime = value;
    setProgress(value);
  };

  const nextTrack = () => {
    setCurrentIndex((p) => (p < queue.length - 1 ? p + 1 : 0));
  };

  const previousTrack = () => {
    setCurrentIndex((p) => (p > 0 ? p - 1 : queue.length - 1));
  };

  const changeVolume = (value) => {
    audioRef.current.volume = value;
    setVolume(value);
  };

  const changeSpeed = (value) => {
    audioRef.current.playbackRate = value;
    setSpeed(value);
  };

  return (
    <AudioPlayerContext.Provider
      value={{
        queue,
        currentTrack,
        isPlaying,
        progress,
        duration,
        volume,
        speed,
        isExpanded,

        playQueue,
        togglePlay,
        handleSeek,
        nextTrack,
        previousTrack,
        changeVolume,
        changeSpeed,
        setIsExpanded,
      }}
    >
      {children}
    </AudioPlayerContext.Provider>
  );
}

export function useAudioPlayer() {
  return useContext(AudioPlayerContext);
}
