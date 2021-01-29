import React, { useEffect, useRef } from "react";

export default function DrumPad(props) {
  const audio = useRef(null);
  const button = useRef(null);

  function handleMouseDown(e) {
    audio.current.play();
    props.onPlay(e.target.id);
  }

  function handleKeyDown(e) {
    if (e.keyCode === props.keyCode) {
      audio.current.play();
      props.onPlay(audio.current.dataset.id);
    }
  }

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    audio.current.volume = props.volume;
    return () => document.removeEventListener("keydown", handleKeyDown);
  });

  return (
    <button
      ref={button}
      id={props.id}
      className="drum-pad"
      onMouseDown={handleMouseDown}
    >
      {props.value}
      <audio
        data-id={props.id}
        ref={audio}
        id={props.value}
        className="clip"
        src={props.src}
        type="audio/mpeg"
        crossOrigin="anonymous"
      ></audio>
    </button>
  );
}
