import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

const rootElement = document.getElementById("app");
const context = createRoot(rootElement);

context.render(<App />);
