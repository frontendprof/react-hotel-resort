import React from "react"
import Error from "./pages/Error"
import Home from "./pages/Home"
import Rooms from "./pages/Rooms"
import SingleRoom from "./pages/SingleRoom"

import {  BrowserRouter as Router,  Switch,  Route,  Link } from "react-router-dom";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/rooms" exact component={Rooms} />
        <Route path="/rooms/:slug" exact component={SingleRoom} />
        <Route component={Error} />
      </Switch>
      
    </div>
  );
}

export default App;
