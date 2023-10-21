import React, { Component } from "react";
import Navigation from "./components/Navigation/Navigation";
import Logo from "./components/Logo/Logo";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import ParticlesBg from "particles-bg";
import Rank from "./components/Rank/Rank";
//import Clarifai from "clarifai";
import FaceRecognition from "./components/FaceRecognition/FaceRecognition";

// const app = new Clarifai.App({
//   apiKey: "b329f9a7a7d241de85f6ade7c19838d1",
// });
const returnClarifaiReqeustOptions = (imageUrl) => {
  const PAT = "85d390e01fb047d0afdb277ad9408824";
  const USER_ID = "regan035";
  const APP_ID = "my-first-application-dxlven";
  const MODEL_ID = "face-detection";
  const IMAGE_URL = imageUrl;
  const raw = JSON.stringify({
    user_app_id: {
      user_id: USER_ID,
      app_id: APP_ID,
    },
    inputs: [
      {
        data: {
          image: {
            url: IMAGE_URL,
          },
        },
      },
    ],
  });
  const requestOptions = {
    method: "POST",
    headers: {
      Accept: "application/json",
      Authorization: "Key " + PAT,
    },
    body: raw,
  };

  return requestOptions;
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
      imageUrl: "",
      box: {},
    };
  }

  calculateFaceLocation = (data) => {
    const clarifaiFace =
      data.outputs[0].data.regions[0].regions_info.bounding_box;
    const image = document.getElementById("inputImage");
    const width = Number(image.width);
    const height = Number(image.height);
    console.log(width, height);
    return {
      leftCol: clarifaiFace.left * width,
      topRow: clarifaiFace.top * height,
      rightCol: clarifaiFace.right * width,
      bodyRow: clarifaiFace.bodyRow * height,
    };
  };
  onInputChange = (e) => {
    this.setState({ input: e.target.value });
  };

  onButtonSubmit = () => {
    this.setState({ imageUrl: this.state.input });
    // the way setStae works has to be input
    //app.models.predict("face-detection", this.state.input)
    fetch(
      "https://api.clarifai.com/v2/models/" + "face-detection" + "/outputs",
      returnClarifaiReqeustOptions(this.state.input)
    )
      .then((response) => response.json())
      .then((response) => console.log("hi", response))
      .then((response) => this.calculateFaceLocation(response))
      .catch((error) => console.log("error", error));
  };

  render() {
    return (
      <div className="App">
        <ParticlesBg type="cobweb" bg={true} />
        <Navigation />
        <Logo />
        <Rank />
        {/* pass input change as prop */}
        <ImageLinkForm
          onInputChange={this.onInputChange}
          onButtonSubmit={this.onButtonSubmit}
        />
        <FaceRecognition imageUrl={this.state.imageUrl} />
      </div>
    );
  }
}

export default App;
