import React, { useState, useContext, useEffect } from "react";
import Test from "./Test";
import { UserContext } from "../contexts/UserContext";
import { Routes, Route, useNavigate } from 'react-router-dom';
import Header from "./Header";

function App() {

  const {currentUser, setCurrentUser} = useContext(UserContext)

  return (
    <div>
      <Header />
      <Test />
    </div>
  );
}

export default App;
