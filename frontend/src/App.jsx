import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Feeds from "./Components/Feed/Feed";
import UserLists from "./Components/Lists/UserLists/UserLists";
import PostLists from "./Components/Lists/PostLists/PostLists";
import UserAnalytics from "./Components/Analytics/UserAnalytics/UserAnalytics";
import PostAnalytics from "./Components/Analytics/PostAnalytics/PostAnlaytics";
import Authentication from "./Components/Auth/Auth";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Feeds />
    </div>
  );
}

export default App;
