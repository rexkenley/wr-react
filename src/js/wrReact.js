/* global Xrm */
import React from "react";
import ReactDOM from "react-dom";
import { initializeIcons } from "@uifabric/icons";

import WrReact from "../jsx/wrReact";

initializeIcons();
ReactDOM.render(<WrReact />, document.getElementById("wrReact"));
