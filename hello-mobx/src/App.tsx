import React, { Children } from "react";
import StoreProvider from "./context";
import "./App.css";

import CityList from "./city";

const App: React.FC = () => {
  return (
    <StoreProvider>
      <div className="App">
        <header className="App-header">
          <CityList />
        </header>
      </div>
    </StoreProvider>
  );
};

export default App;
