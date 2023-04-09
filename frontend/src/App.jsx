import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Feeds from "./Components/Feed/Feed";

function App() {
  return (
    <div
      className="App"
      style={{ "--theme-bg": "#393939", "--theme-text-clr": "#f5f5f5" }}
    >
      <Navbar />
      <Feeds />
    </div>
  );
}

export default App;
