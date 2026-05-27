import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

import { AudioProvider } from "./context/AudioContext";
import AudioPlayer from "./components/Podcasts/AudioPlayer";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AudioProvider>
      <BrowserRouter>
        <App />
        <AudioPlayer />
      </BrowserRouter>
    </AudioProvider>
  </StrictMode>,
);
