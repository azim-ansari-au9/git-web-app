import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Components/Home";
import News from "./Components/Home/News";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import About from "./Components/Home/About";
import SingleUser from "../src/Components/Users/SingleUser";
import UserRepos from "../src/Components/Users/UserRepos";
import "./App.css";

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/Home" component={Home} />
        <Route exact path="/News" component={News} />
        <Route exact path="/About" component={About} />
        {/* <Route exact path='/singleuser' component={SingleUser} />   */}
        <Route
          exact
          path="/user/:login"
          component={SingleUser}
        />
        
      </Switch>
      <Footer />
    </>
  );
};

export default App;
