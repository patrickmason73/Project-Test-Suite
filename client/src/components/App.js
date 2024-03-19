import React, { useState, useContext, useEffect } from "react";
import Test from "./Test";
import { UserContext } from "../contexts/UserContext";
import { Routes, Route, useNavigate } from 'react-router-dom'

function App() {

  const {currentUser, setCurrentUser} = useContext(UserContext)

  return (
    <div>
      <Test />
    </div>
  );
}

export default App;
