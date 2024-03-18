import React, { useState, useContext } from "react";
import Test from "./Test";
import { UserContext } from "../contexts/UserContext";
import { Routes, Route, useNavigate } from 'react-router-dom'

function App() {

  return (
    <div>
      <Test />
    </div>
  );
}

export default App;
