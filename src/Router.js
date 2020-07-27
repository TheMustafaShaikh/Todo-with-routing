import React,{useState} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from "./home"
import Add from "./add"
import Data from "./context"
export default function RouterConfig(){
    const data = useState([])
return(
    <div>
    <Data.Provider value={data}>
        <Router>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/add" component={Add}/>
            </Switch>
        </Router>

    </Data.Provider>

    </div>


);

}