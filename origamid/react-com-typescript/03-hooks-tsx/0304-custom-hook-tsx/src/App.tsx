import React from "react";
import videoSrc from "./video.mp4";
import useLocalStorage from "./useLocalStorage";

const App = () => {
  const video = React.useRef<HTMLVideoElement>(null);
  const [volume, setVolume] = useLocalStorage("volume", "0");

  React.useEffect(() => {
    if (!video.current) return;
    const n = Number(volume);
    if (n >= 0 && n <= 1) video.current.volume = n;
  }, [volume]);

  return (
    <div>
      {volume}
      <div className="flex">
        <button onClick={() => setVolume("0")}>0</button>
        <button onClick={() => setVolume("0.5")}>50</button>
        <button onClick={() => setVolume("1")}>100</button>
        <button onClick={() => setVolume("2")}>200 (erro)</button>
      </div>
      <video src={videoSrc} ref={video} controls></video>
    </div>
  );
};
// Custo Hook
// Devemos anotar seus parametros e o retorno
// useLocalStorage.tsx

export default App;
