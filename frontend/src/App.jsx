import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Feeds from "./Components/Feed/Feed";
import UserLists from "./Components/Lists/UserLists/UserLists";
import PostLists from "./Components/Lists/PostLists/PostLists";

function App() {
  return (
    <div
      className="App"
      style={{ "--theme-bg": "#393939", "--theme-text-clr": "#f5f5f5" }}
    >
      <Navbar />
    </div>
  );
}

export default App;
