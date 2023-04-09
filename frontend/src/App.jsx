import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Feeds from "./Components/Feed/Feed";
import UserLists from "./Components/Lists/UserLists/UserLists";
import PostLists from "./Components/Lists/PostLists/PostLists";
import { UserAnalytics } from "./Components/Analytics/UserAnalytics/UserAnalytics";
import { PostAnalytics } from "./Components/Analytics/PostAnalytics/PostAnlaytics";

function App() {
  return (
    <div
      className="App"
      style={{ "--theme-bg": "#393939", "--theme-text-clr": "#f5f5f5" }}
    >
      <Navbar />
      <PostAnalytics />
    </div>
  );
}

export default App;
