import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // ✅ Fix: Use BrowserRouter
import { Provider } from "react-redux";
import { store } from "./redux/store.ts";
import App from "./App.tsx";
import { KeyboardGame } from "./pages/index.ts";

import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Router>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/game" element={<KeyboardGame />} />
        </Routes>
      </Provider>
    </Router>
  </StrictMode>
);
