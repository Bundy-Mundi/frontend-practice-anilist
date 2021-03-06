import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from './pages/About';
import Contact from "./pages/Contact";
import Animation from "./pages/Animation/Animation";

export default () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route exact path="/about">
          <About/>
        </Route>
        <Route exact path="/contact">
          <Contact/>
        </Route>
        <Route exact path="/animation">
          <Animation/>
        </Route>
      </Switch>
    </Router>
  );
}
