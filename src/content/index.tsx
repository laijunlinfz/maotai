import React from "react";
import ReactDOM from "react-dom";
import * as utils from "@/utils";
import Content from "./content";


try {
  const app = document.createElement("div");
  app.id = "content-container";
  document.body.appendChild(app);
  
  ReactDOM.render(<Content />, app);
  
  const isJD = utils.isJD();
  const isTM = utils.isTM();
  if (isJD || isTM) {
    let insertScript = document.createElement("script");
    insertScript.setAttribute("type", "text/javascript");
    insertScript.src = window.chrome.extension.getURL("insert.js");
    document.body.appendChild(insertScript);
  } else {
    console.log('该软件使用仅限于京东和天猫');
  }
} catch (err) {}
