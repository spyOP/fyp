import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Host from "./pages/Host";
import Users from "./pages/Users";
import Payloads from "./pages/Payloads";
import Graphs from "./pages/Graphs";
import Tasks from "./pages/Tasks";
import Guide from "./pages/Guide";
import NavBar from "./components/navbar";

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Sidebar>
        <Routes>
          <Route path="/" element={<Host />} />
          <Route path="/dashboard" element={<Host />} />
          <Route path="/Users" element={<Users />} />
          <Route path="/Payloads" element={<Payloads />} />
          <Route path="/Graphs" element={<Graphs />} />
          <Route path="/Tasks" element={<Tasks />} />
          <Route path="/Guide" element={<Guide />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};

export default App;