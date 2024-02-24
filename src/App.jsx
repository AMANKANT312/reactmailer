

import { useState } from "react";
import "./App.css";
import Home from "./component/Home";
function App() {
  const[smtp,setSmtp]=useState("")

  return (
    <>
     <Home/>
    </>
  );
}

export default App;
