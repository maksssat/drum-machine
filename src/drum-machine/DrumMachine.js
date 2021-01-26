import DrumPad from "./DrumPad";

export default function DrumMachine(props) {
  return (
    <div id="drum-machine">
      <div id="display"></div>
      <DrumPad
        value="Q"
        src="https://raw.githubusercontent.com/maksssat/drum-machine/master/src/drum-machine/sounds/909-Clap-1.mp3"
      />
      <DrumPad
        value="W"
        src="https://raw.githubusercontent.com/maksssat/drum-machine/master/src/drum-machine/sounds/909-Crash-HD2.mp3"
      />
      <DrumPad
        value="E"
        src="https://raw.githubusercontent.com/maksssat/drum-machine/master/src/drum-machine/sounds/909-HiHatOpen-D6.mp3"
      />
      <DrumPad
        value="A"
        src="https://raw.githubusercontent.com/maksssat/drum-machine/master/src/drum-machine/sounds/909-HiTom-3D7.mp3"
      />
      <DrumPad
        value="S"
        src="https://raw.githubusercontent.com/maksssat/drum-machine/master/src/drum-machine/sounds/909-Kick-T3A0DA.mp3"
      />
      <DrumPad
        value="D"
        src="https://raw.githubusercontent.com/maksssat/drum-machine/master/src/drum-machine/sounds/909-LoTom-0D7.mp3"
      />
      <DrumPad
        value="Z"
        src="https://raw.githubusercontent.com/maksssat/drum-machine/master/src/drum-machine/sounds/909-MidTom-0DA.mp3"
      />
      <DrumPad
        value="X"
        src="https://raw.githubusercontent.com/maksssat/drum-machine/master/src/drum-machine/sounds/909-Ride-D0.mp3"
      />
      <DrumPad
        value="C"
        src="https://raw.githubusercontent.com/maksssat/drum-machine/master/src/drum-machine/sounds/909-Snare-T3T0S7.mp3"
      />
    </div>
  );
}
