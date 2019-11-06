import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from "./components/navbar.component";
import CreateUser from "./components/create-user.component";
import ListUser from "./components/list-user.component";

function App() {
  return (
    <Router>
      <div className="container">

        <Navbar />
        <br />
        <Route path="/user" component={CreateUser} />
        <br />
        <Route path="/userList" component={ListUser} />
      </div>
    </Router>
  );
}

export default App;
