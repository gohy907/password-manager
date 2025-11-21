import React from "react";
import ReactDOM from "react-dom/client";
import SignIn from "./SignIn.jsx"
import Register from "./Register.jsx"
import CommunityPage from "./One.jsx"
import ForceGraph from "./Graph.jsx"
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<SignIn />} />
        <Route path="/register" element={<Register />} />
        <Route path="/aboba" element={<CommunityPage />} />
        <Route path="/graph" element={<ForceGraph />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
