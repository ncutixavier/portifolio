import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes/index";
import store from './store/store'
import { Provider } from 'react-redux'
import "../src/assets/scss/index.scss";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Routes />
        </Router>
    </Provider>,
    document.getElementById("root")
);
