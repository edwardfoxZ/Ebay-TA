import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import routing components
import "./App.css";
import { Main } from "./components/Main";
import { Nav } from "./components/Nav";

function App() {
  return (
    <Router>
      <div className="App flex flex-col min-h-screen">
        <Nav />
        <header className="App-header flex flex-col items-center justify-center">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/seller" />
            <Route path="/buyer" />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
