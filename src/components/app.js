import React, { Component } from 'react';
import axios from 'axios';
import { BrowseRouter as Router, Switch, Route } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faPhoneVolume, faMapMarkerAlt, faClock} from "@fortawesome/free-solid-svg-icons";
import Icons from "../helpers/icons";


//import Header from './headernavbar/header';
// import Navbar from './headernavbar/navbar';
import Home from "./pages/home";
import Services from "./pages/services";
import Appointment from "./pages/appointment";
import Signin from "./pages/signin";

library.add(faPhoneVolume, faMapMarkerAlt, faClock);

export default class App extends Component {
  constructor() {
    super();

    this.getDesignJson = this.getDesignJson.bind(this);
  }
  getDesignJson() {
    axios
      . get("https://fonts.googleapis.com/css?family=Montserrat")
      .then(response => {
        console.log("response data", response);
      })
      .catch(error => {
        console.log(error);
      });
  }
  render() {
    this.getDesignJson();
    Icons();
    return (
      <div className='app'>
      
        <Route>
          <div>

          <FontAwesomeIcon />
         
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/services" component={Services} />
              <Route path="/appointment" component={Appointment} />
              <Route path="/signin" component={Signin} />
          
            </Switch>
          </div>
        </Route>
        
      </div>
    );
  }

}
