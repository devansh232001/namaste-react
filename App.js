import React from "react"
import ReactDOM from "react-dom/client"
const heading = React.createElement("h1", { id: "title", className: "headclass" }, "Hello Everyone from React")
const heading1 = React.createElement("h1", {}, "Heading 1")
const heading2 = React.createElement("h2", {}, "Heading 2")
const container = React.createElement("div", { id: "container",hellow: "world", }, [heading, heading1, heading2])

const root = ReactDOM.createRoot(document.getElementById("root")) // passing a react element into root and renders modifies our DOM
root.render(container)   