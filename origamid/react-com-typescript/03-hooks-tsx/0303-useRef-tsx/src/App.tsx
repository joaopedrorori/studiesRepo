// import React from "react";
// import videoSrc from "./video.mp4";

// const App = () => {
//   const video = React.useRef<HTMLVideoElement>(null);

//   React.useEffect(() => {
//     console.log(video.current);
//   }, []);

//   return (
//     <div>
//       <div className="flex">
//         <button onClick={() => video.current?.play()}>Play</button>
//         <button onClick={() => video.current?.pause()}>Pause</button>
//       </div>
//       <video controls src={videoSrc} ref={video}></video>
//     </div>
//   );
// };

// export default App;
// useRef
// Devemos definir o tipo de elemento do useRef<Elemento>, quando utilizamos o mesmo para manipularmos elementos do DOM.
// Exercicio
// Adicione funcionalidades ao player de vídeo:
// 1 - Use um estado reativo para verificar se o vídeo está tocando ou não.
// 2 - Função para avançar o vídeo em +2s.
// 3 - Função para alterar o playbackRate do vídeo.
// 4 - Função para entrar/sair do modo pictureInPicture.
// 5 - Função para alternar o som (mudo/não mudo) do vídeo.

import React from "react";
import videoSrc from "./video.mp4";

const App = () => {
  const video = React.useRef<HTMLVideoElement>(null);
  const [paused, setPaused] = React.useState(true);

  function forward(n: number) {
    if (!video.current) return;
    video.current.currentTime += n;
  }

  function changePlayBackRate(speed: number) {
    if (!video.current) return;
    video.current.play();
    video.current.playbackRate = speed;
  }

  function pictureInPicture() {
    if (!video.current) return;
    if (document.pictureInPictureElement) {
      document.exitPictureInPicture();
    } else video.current.requestPictureInPicture();
  }

  function mute() {
    if (!video.current) return;
    video.current.muted = !video.current.muted;
  }

  return (
    <div>
      <div className="flex">
        {paused ? (
          <button
            onClick={() => {
              video.current?.play();
            }}
          >
            Play
          </button>
        ) : (
          <button
            onClick={() => {
              video.current?.pause();
            }}
          >
            Pause
          </button>
        )}

        <button
          onClick={() => {
            forward(2);
          }}
        >
          +2s
        </button>

        <button
          onClick={() => {
            changePlayBackRate(1);
          }}
        >
          1x
        </button>
        <button
          onClick={() => {
            changePlayBackRate(2);
          }}
        >
          2x
        </button>
        <button
          onClick={() => {
            pictureInPicture();
          }}
        >
          PiP
        </button>
        <button
          onClick={() => {
            mute();
          }}
        >
          M
        </button>
      </div>
      <div>
        <video
          controls
          src={videoSrc}
          onPause={() => setPaused(true)}
          onPlay={() => setPaused(false)}
          ref={video}
        ></video>
      </div>
    </div>
  );
};

export default App;
