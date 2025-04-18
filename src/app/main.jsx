import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { Store } from "../components/redux/Store";
import ErrorBoundary from "../components/ErrorBoundary";

createRoot(document.getElementById("root")).render(
  <ErrorBoundary>
    <Provider store={Store}>
      <App />
    </Provider>
  </ErrorBoundary>
);
