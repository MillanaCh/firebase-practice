import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import GeneralAuthProvider from "./context/GeneralAuthContext";
import FirestoreProvider from "./context/GeneralFirestore";
import CardProvider from "../src/context/GeneralCard";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  // <React.StrictMode>
    <FirestoreProvider>
      <GeneralAuthProvider>
        <CardProvider>
          <Router>
            <App />
          </Router>
        </CardProvider>
      </GeneralAuthProvider>
    </FirestoreProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
