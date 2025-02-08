import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { GlobalStyle } from "./styles/GlobalStyle";
import { GlobalProvider } from "./context/globalContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <GlobalProvider>
      <Router> {/* ✅ Ensures navigation works everywhere */}
        <App />
      </Router>
    </GlobalProvider>
  </React.StrictMode>
);
