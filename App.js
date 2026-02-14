import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div", {
    id: "parent"
}, [React.createElement('div', {
    id: "child"
}, "I am child"), React.createElement('div', {
    id: "child2"
}, "I am child2")]);

const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(root);
root.render(parent);