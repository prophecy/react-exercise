import React, { Children } from "react";
import StoreContextProvider from "./stores/StoreContextProvider";
import "./App.css";

import Search from "./components/Search";
import CityList from "./components/CityList";

const App: React.FC = () => {
  return (
    <StoreContextProvider>
      <div className="App">
        <header className="App-header">
          <Search />
          <CityList />
        </header>
      </div>
    </StoreContextProvider>
  );
};

export default App;
