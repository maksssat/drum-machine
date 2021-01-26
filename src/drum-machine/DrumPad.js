import { useRef } from "react";

export default function DrumPad(props) {
  const audio = useRef(null);

  function handleClick() {
    audio.current.play();
  }

  return (
    <button className="drum-pad" onClick={handleClick}>
      {props.value}
      <audio
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
