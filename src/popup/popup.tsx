import React from "react";
import {Client} from "chomex";
import "../assets/tailwind.css";
import { createRoot } from "react-dom/client";
const client = new Client(chrome.runtime);
const test = (
  <h1 className="text-3xl text-green-500 font-bold underline">
    Hello React page.
    <span id="box"></span>
    <button
      onClick={() => {
        client.message("/users/create").then((response) => {
            console.log(response);
        });
      }}
    >
      send message
    </button>
    <br/>
    <button
      onClick={() => {
        client.message("/usersd/unknown").then((response) => {
            console.log(response);
        });
      }}
    >
      send message 2
    </button>
  </h1>
);

const container = document.createElement("div");
document.body.appendChild(container);
const root = createRoot(container);
root.render(test);
