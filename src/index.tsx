import "./config/firebase";

import { createRoot } from "react-dom/client";

import { App } from "./App";
import { GlobalStyle } from "./styles/global";
const container = document.getElementById("root");

if (container === null) throw new Error("GetElementById has returned null");

const root = createRoot(container);
root.render(
  <>
    <GlobalStyle />
    <App />
  </>
);
