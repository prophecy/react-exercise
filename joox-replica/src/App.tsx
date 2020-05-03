import React from "react";

import "./App.css";
import "./styles/styles.scss";

import StoreContextProvider from "./stores/StoreContextProvider";
import { Route, Switch, Redirect } from "react-router-dom";

import Header from "./components/frame/Header";
import SideBar from "./components/frame/SideBar";
import Content from "./components/container/Container";
import Footer from "./components/frame/Footer";
import NotFound from "./components/NotFound";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  return (
    <StoreContextProvider>
      <div>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/not-found" component={NotFound} />
          <Route
            path="/"
            render={(props) => (
              <div>
                <Header />
                <SideBar />
                <Content />
                <Footer />
              </div>
            )}
          />
          <Redirect to="/not-found" />
        </Switch>
      </div>
    </StoreContextProvider>
  );
}

export default App;
