import React from "react";
import ReactDOM from "react-dom";
import AppCore from "./AppCore";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<AppCore />, document.getElementById("root"));
registerServiceWorker();
