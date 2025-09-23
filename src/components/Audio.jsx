import { useState, useRef } from "react";

export default function AudioButton() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const toggleAudio = () => {
    if (!audioRef.current) return;

    if (!isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      <img
        onClick={toggleAudio}
        src="/disk.webp"
        alt="Reproducir"
        className={`h-36 cursor-pointer transition-transform duration-150 ease-out active:scale-95 ${
          isPlaying ? "spin-slow" : ""
        }`}
      />
      <audio ref={audioRef} src="/song.mp3" />
    </>
  );
}