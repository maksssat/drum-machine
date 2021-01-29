import React from "react";
import DrumPad from "./DrumPad";

const samples = [
  {
    value: "Q",
    id: "Clap",
    keyCode: 81,
    src:
      "https://raw.githubusercontent.com/maksssat/drum-machine/master/src/drum-machine/sounds/909-Clap-1.mp3",
  },
  {
    value: "W",
    id: "Crash",
    keyCode: 87,
    src:
      "https://raw.githubusercontent.com/maksssat/drum-machine/master/src/drum-machine/sounds/909-Crash-HD2.mp3",
  },
  {
    value: "E",
    id: "HiHat",
    keyCode: 69,
    src:
      "https://raw.githubusercontent.com/maksssat/drum-machine/master/src/drum-machine/sounds/909-HiHatOpen-D6.mp3",
  },
  {
    value: "A",
    id: "HiTom",
    keyCode: 65,
    src:
      "https://raw.githubusercontent.com/maksssat/drum-machine/master/src/drum-machine/sounds/909-HiTom-3D7.mp3",
  },
  {
    value: "S",
    id: "Kick",
    keyCode: 83,
    src:
      "https://raw.githubusercontent.com/maksssat/drum-machine/master/src/drum-machine/sounds/909-Kick-T3A0DA.mp3",
  },
  {
    value: "D",
    id: "LoTom",
    keyCode: 68,
    src:
      "https://raw.githubusercontent.com/maksssat/drum-machine/master/src/drum-machine/sounds/909-LoTom-0D7.mp3",
  },
  {
    value: "Z",
    id: "MidTom",
    keyCode: 90,
    src:
      "https://raw.githubusercontent.com/maksssat/drum-machine/master/src/drum-machine/sounds/909-MidTom-0DA.mp3",
  },
  {
    value: "X",
    id: "Ride",
    keyCode: 88,
    src:
      "https://raw.githubusercontent.com/maksssat/drum-machine/master/src/drum-machine/sounds/909-Ride-D0.mp3",
  },
  {
    value: "C",
    id: "Snare",
    keyCode: 67,
    src:
      "https://raw.githubusercontent.com/maksssat/drum-machine/master/src/drum-machine/sounds/909-Snare-T3T0S7.mp3",
  },
];

export default class DrumMachine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: "",
      volume: "1.0",
      clicks: 0,
    };
    this.handlePlay = this.handlePlay.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handlePlay(e) {
    this.setState((state) => ({ display: e, clicks: state.clicks + 1 }));
  }

  handleChange(e) {
    this.setState({ volume: e.target.value });
  }

  displayClear(x) {
    if (this.state.clicks === x) {
      this.setState({ display: "" });
    }
  }

  componentDidUpdate() {
    const clicks = this.state.clicks;
    const displayClear = this.displayClear.bind(this, clicks);
    setTimeout(displayClear, 2000);
  }

  render() {
    const drumpadList = samples.map(({ value, id, keyCode, src }) => (
      <DrumPad
        id={id}
        value={value}
        keyCode={keyCode}
        src={src}
        key={value}
        onPlay={this.handlePlay}
        volume={this.state.volume}
      />
    ));

    return (
      <div id="drum-machine">
        <div id="drumpad-wrapper">{drumpadList}</div>
        <div id="control-wrapper">
          <div id="display">{this.state.display}</div>
          <input
            type="range"
            min="0"
            max="1.0"
            step="0.1"
            value={this.state.volume}
            onChange={this.handleChange}
          />
        </div>
      </div>
    );
  }
}
