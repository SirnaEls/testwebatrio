import { useState } from "react";
import reactLogo from "./assets/react.svg";
import ProgressBar from "./components/progressBar";
import HeaderTesteur from "./components/headerTesteur";
import "./App.css";

function App() {
  return (
    <div>
      <HeaderTesteur />
      <ProgressBar />
    </div>
  );
}

export default App;
