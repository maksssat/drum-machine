import DrumPad from "./DrumPad";

export default function DrumMachine(props) {
  return (
    <div id="drum-machine">
      <div id="display"></div>
      <DrumPad
        value="Q"
        src="https://raw.githubusercontent.com/maksssat/img-s/master/909-Crash-HD2.mp3"
      />
      <DrumPad value="W" />
      <DrumPad value="E" />
      <DrumPad value="A" />
      <DrumPad value="S" />
      <DrumPad value="D" />
      <DrumPad value="Z" />
      <DrumPad value="X" />
      <DrumPad value="C" />
    </div>
  );
}
