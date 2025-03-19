import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

const rootElement = document.getElementById("root");
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <BrowserRouter basename="/FSY_tools">
      <App />
    </BrowserRouter>
  );
} else {
  console.error("Failed to find the root element");
}
