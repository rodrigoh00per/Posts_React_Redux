import ReactDOM from "react-dom";
import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers";
import App from "./components/App";
import thunk from "redux-thunk";

ReactDOM.render(
  <Provider store={createStore(reducers, applyMiddleware(thunk))}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
