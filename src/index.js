import React from "react";
import ReactDOM from "react-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "./index.css";
import NavbarPage from "./navBars3";
import AppPage from "./navBar" ;
import ClassicFormPage from "./navBars3";
import registerServiceWorker from './registerServiceWorker';
import App from "./App";

ReactDOM.render( <ClassicFormPage/> , document.getElementById('root'));

registerServiceWorker();