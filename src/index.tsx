import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { SwipeCardAnimation } from "./screens/SwipeCardAnimation";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <SwipeCardAnimation />
  </StrictMode>,
);
