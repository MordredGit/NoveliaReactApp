import React, { Component } from "react";
import Body from "./Body";
import AOS from "aos";
import "aos/dist/aos.css";
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "bootstrap/dist/css/bootstrap.min.css";

AOS.init();
function App() {
  return <Body />;
}

export default App;
