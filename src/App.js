import React from "react";
import "./default.scss";
import Header from "./components/Header/index.js";
import Homepage from "./pages/Homepage/index.js";

const App = () => {
  return (
    <div className="App">
      <Header />
      <div className="main">
        <Homepage />
      </div>
    </div>
  );
};

export default App;
