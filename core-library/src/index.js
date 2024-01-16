import React from "react";
import { createRoot } from "react-dom/client";
import {TCTBButton} from "./Components";

const rootElement = document.getElementById("app");
const context = createRoot(rootElement);

context.render(<TCTBButton />);