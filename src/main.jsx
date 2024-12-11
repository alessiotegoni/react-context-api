import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import "./index.css";
import App from "./App.jsx";
import PostsProvider from "./context/PostsContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <PostsProvider>
      <Router>
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
      </Router>
    </PostsProvider>
  </StrictMode>
);
