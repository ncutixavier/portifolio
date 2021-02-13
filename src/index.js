import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router} from "react-router-dom";
import Routes from "./routes/index";
import "../src/assets/scss/index.scss";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
        <Router>
            <Routes />
        </Router>,
    document.getElementById("root")
);
