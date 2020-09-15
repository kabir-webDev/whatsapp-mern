import React from "react";
import "./App.css";
import Chat from "./Component/Chat/Chat";
import Sidebar from "./Component/Sidebar/Sidebar";

function App() {
  return (
    <div className="app">
      <div className="app__body">
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
}

export default App;
