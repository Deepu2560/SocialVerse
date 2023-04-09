import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// importing all react components
import Navbar from "./Components/Navbar/Navbar";
import Feeds from "./Components/Feed/Feed";
import UserLists from "./Components/Lists/UserLists/UserLists";
import PostLists from "./Components/Lists/PostLists/PostLists";
import UserAnalytics from "./Components/Analytics/UserAnalytics/UserAnalytics";
import PostAnalytics from "./Components/Analytics/PostAnalytics/PostAnlaytics";
import Authentication from "./Components/Auth/Auth";

// Main App function. In this web application this function is rendered to react-dom.
export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Routes>
          <Route exact path="/" element={<Feeds />} />
          <Route exact path="/user-analytics" element={<UserAnalytics />} />
          <Route exact path="/post-analytics" element={<PostAnalytics />} />
          <Route exact path="/user-list" element={<UserLists />} />
          <Route exact path="/post-list" element={<PostLists />} />
          <Route exact path="/auth" element={<Authentication />} />
        </Routes>
      </Router>
    </div>
  );
}
