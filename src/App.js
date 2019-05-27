import React, { Component } from "react";
import "./App.css";
import Particles from "react-particles-js";
import Navigation from "./components/Navigation/Navigation";
import Rank from "./components/Rank/Rank";
import Logo from "./components/Logo/Logo";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
const paramsOptions = {
  particles: {
    number: {
      value: 30,
      density: {
        enable: true,
        value_area:600
      }
    }
  }
};
class App extends Component {
  render() {
    return (
      <div className="App">
        <Particles className="particles" params={paramsOptions} />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm />
      </div>
    );
  }
}

export default App;
