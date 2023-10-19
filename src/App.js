import React, { Component } from "react";
import Navigation from "./components/Navigation/Navigation";
import Logo from "./components/Logo/Logo";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import ParticlesBg from "particles-bg";

function App() {
  return (
    <div className="App">
      <ParticlesBg type="cobweb" bg={true} />
      <Navigation />
      <Logo />
      <ImageLinkForm />
    </div>
  );
}

export default App;
