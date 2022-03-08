import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ContextProvider } from "./Context/Context";

ReactDOM.render(
  <React.StrictMode>
<<<<<<< HEAD
    <ContextProvider><App /></ContextProvider>

=======
    <ContextProvider>
      <App />
    </ContextProvider>
>>>>>>> 236ac109d335fa46a2289188a666e60ef5300c08
  </React.StrictMode>,
  document.getElementById("root")
);
