import React, { Children } from "react";
import StoreProvider from "./stores/context";
import "./App.css";

import CityList from "./components/CityList";

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
