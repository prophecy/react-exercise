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

export interface AppProps {}

export interface AppState {
  isSidebarExpanded: boolean;
}

class App extends React.Component<AppProps, AppState> {
  state = { isSidebarExpanded: false };

  handleClickHeader = () => {
    const isSidebarExpanded = !this.state.isSidebarExpanded;
    this.setState({ isSidebarExpanded });
  };

  render() {
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
                  <Header handleClickHamburger={this.handleClickHeader} />
                  <SideBar isExpanded={this.state.isSidebarExpanded} />
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
}

export default App;
/*
export interface AppProps {
  
}
 
export interface AppState {
  
}
 
class App extends React.Component<AppProps, AppState> {
  state = { :  }
  render() { 
    return (  );
  }
}
 
export default App;
*/
