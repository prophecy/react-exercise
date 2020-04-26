import React from "react";

import "./styles/styles.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Container from "./components/Container";

function App() {
  return (
    <div className="root">
      <Header />
      <Container />
    </div>
  );
}

export default App;
