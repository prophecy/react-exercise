import React from "react";

import "./App.css";
import "./styles/styles.scss";

import StoreContextProvider from "./stores/StoreContextProvider";

import Header from "./components/frame/Header";
import SideBar from "./components/frame/SideBar";
import Content from "./components/content/Content";
import Footer from "./components/frame/Footer";

function App() {
  return (
    <StoreContextProvider>
      <div>
        <Header />
        <SideBar />
        <Content />
        <Footer />
      </div>
    </StoreContextProvider>
  );
}

export default App;
