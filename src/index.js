import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import logger from "./services/logService";

logger.init();

ReactDOM.render(<App />, document.getElementById("root"));
reportWebVitals();
