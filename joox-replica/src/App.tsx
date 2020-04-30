import React from "react";
import "./App.css";
import "./styles/styles.scss";

import StoreContextProvider from "./stores/StoreContextProvider";

import Hello from "./components/Hello";
import HelloCtrl from "./components/HelloCtrl";

function App() {
  return (
    <StoreContextProvider>
      <div>
        <h1>
          <Hello />
          <HelloCtrl />
        </h1>
      </div>
    </StoreContextProvider>
  );
}

export default App;
