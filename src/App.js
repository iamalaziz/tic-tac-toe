import React, { Fragment } from "react";

import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUp from "./components/Register/SignUp";
import Login from "./components/Register/Login";
import Logout from "./components/Register/Logout";
import Board from "./components/Board/Board";
// import PrivateRoute from "./components/Register/PrivateRoute";

function App() {
  return (
    <div className="App">
      <Router>
        <Fragment>
          <Navbar />
          <Routes>
            <Route path="/" element={<Board />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="*" element={<p>No match</p>} />
          </Routes>
        </Fragment>
      </Router>
    </div>
  );
}

export default App;
