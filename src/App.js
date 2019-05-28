import React, { Component } from "react";
import "./App.css";
import Clarifai from "clarifai";
import Particles from "react-particles-js";
import Navigation from "./components/Navigation/Navigation";
import Signin from "./components/Signin/Signin";
import Rank from "./components/Rank/Rank";
import Logo from "./components/Logo/Logo";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import FaceRecognition from "./components/FaceRecognition/FaceRecognition";
import Register from './components/Register/Register';
const app = new Clarifai.App({
  apiKey: "c46477bf141b4b098dd5fb54ef5bc628"
});
const paramsOptions = {
  particles: {
    number: {
      value: 30,
      density: {
        enable: true,
        value_area: 600
      }
    }
  }
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
      imageUrl: "",
      box: {},
      route:'signin',
      isSignedIn: false
    };
  }
  calculateFaceLocation = data => {
    console.log(data);
    const clarifaiData =
      data.outputs[0].data.regions[0].region_info.bounding_box;

    const image = document.getElementById("inputimage");
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: clarifaiData.left_col * width,
      topRow: clarifaiData.top_row * height,
      rightCol: width - clarifaiData.right_col * width,
      bottomRow: height - (clarifaiData.bottom_row * height)
    };
  };
  displayBoxBounding = box => {
    this.setState({ box });
    console.log(this.state.box);
  };
  onInputChange = event => {
    this.setState({ input: event.target.value });
  };
  onRouteChange = (route) =>{
    if(route === 'signout'){
      this.setState({isSignedIn:false})
    }else if(route === 'home'){
      this.setState({isSignedIn:true})
    }
    this.setState({route:route})
  }
  onButtonSubmit = () => {
    this.setState({ imageUrl: this.state.input });
    console.log("click");
    app.models
      .predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
      .then(response =>
        this.displayBoxBounding(this.calculateFaceLocation(response))
      )
      .catch(err => console.log(err));
  };
  render() {
    return (
      <div className="App">
        <Particles className="particles" params={paramsOptions} />
        <Navigation isSignedIn={this.state.isSignedIn} onRouteChange={this.onRouteChange} />
        {this.state.route === 'home' ?
        <div>
        <Logo />
        <Rank />
        <ImageLinkForm
          onInputChange={this.onInputChange}
          onButtonSubmit={this.onButtonSubmit}
        />
        <FaceRecognition box={this.state.box} imageUrl={this.state.imageUrl} /></div>
        :
        (
          this.state.route ==='signin' ?
          <Signin onRouteChange={this.onRouteChange}/>
          :
          <Register onRouteChange={this.onRouteChange}/>
        )
        }
      </div>
    );
  }
}

export default App;
