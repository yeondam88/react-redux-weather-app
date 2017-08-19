import React from "react";
import ReactDOM from "react-dom";
import "../node_modules/bulma/css/bulma.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import "./index.css";
import App from "./components/App";

// Redux
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reducers from "./reducers";
import ReduxPromise from "redux-promise";

// Service Worker
import registerServiceWorker from "./registerServiceWorker";

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
