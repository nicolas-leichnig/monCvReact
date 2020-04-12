import React from "react";
import ReactDOM from "react-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "./index.css";
import NavbarPage from "./navBar";
import AppPage from "./navBar" ;
import ClassicFormPage from "./navBars3";
import registerServiceWorker from './registerServiceWorker';
import App from "./App";

ReactDOM.render( <NavbarPage/> , document.getElementById('root'));

registerServiceWorker();