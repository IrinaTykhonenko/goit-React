import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

//ReactDOM.render(<App />, document.getElementById("root"));

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// const link = React.createElement("a", { href: "reactjs.org" }, "Link");

// ReactDOM.render(link, document.getElementById("root"));

// const jsxLink = <a href="reactjs.org">Link</a>;
// console.log(link);
// console.log(jsxLink);

//ReactDOM.render(template, document.getElementById("root"));
