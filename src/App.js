import React from "react";
import "./App.css";
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import About from "./Containers/About";
import UserDetail from "./Containers/UserDetail";
import Home from "./Containers/Home";
import Navbar from "./Layouts/Navbar";
import Search from "./Containers/Search";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

    <div className="container">
    <Switch>
        <Route path="/"  exact component={Home} />
        <Route path="/search"  component={Search} />
        <Route path="/about"  component={About} />
        <Route path="/users/:login" component={UserDetail} />
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
