import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { applyLocalOverride } from "./data/override";
import App from "./App";

/* Apply any content saved from the hidden #admin panel (browser only) */
applyLocalOverride();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
