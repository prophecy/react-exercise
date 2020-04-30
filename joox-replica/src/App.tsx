import React from "react";
import "./App.css";
import "./styles/styles.scss";

import StoreContextProvider from "./stores/StoreContextProvider";

import Hello from "./components/Hello";

function App() {
  return (
    <StoreContextProvider>
      <div>
        <h1>
          <Hello />
        </h1>
      </div>
    </StoreContextProvider>
  );
}

export default App;
