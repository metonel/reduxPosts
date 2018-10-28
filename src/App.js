import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Provider } from "react-redux";

import Posts from "./components/Posts";
import Postform from "./components/Postform";

//const store = createStore(() => [], {}, applyMiddleware()); //documentatia redux store https://github.com/reduxjs/redux/tree/master/docs/api

import store from "./store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <Postform />
            <div className="App-container">
              <Posts />
            </div>
          </header>
        </div>
      </Provider>
    );
  }
}

export default App;
