import { createRoot } from "react-dom/client";
import "./style.css";
import HomePage from "./Layout/HomePage";

const root = createRoot(document.getElementById("root"));

root.render(
  <div>
    <HomePage />
  </div>
);
