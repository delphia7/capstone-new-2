import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Footer extends Component {
      render() {
            return(
                  <div className="title-wrapper">
                        <div className="title">
                              Opening Hours:
                        </div>

                        <div className="open-block">
                              <div className="open-title">
                                    MONDAY
                              </div>
                              <div className="open-subtitle">9am - 7pm</div>
                        </div>

                        <div className="open-block">
                              <div className="open-title">
                                    TUESDAY
                              </div>
                              <div className="open-subtitle">9am - 7pm</div>
                        </div>

                        <div className="open-block">
                              <div className="open-title">
                                    WEDNESDAY
                              </div>
                              <div className="open-subtitle">9am - 7pm</div>
                        </div>

                        <div className="open-block">
                              <div className="open-title">
                                    THURSDAY
                              </div>
                              <div className="open-subtitle">9am - 7pm</div>
                        </div>

                        <div className="open-block">
                              <div className="open-title">
                                    FRIDAY
                                    
                              </div>
                              <div className="open-subtitle">9am - 7pm</div>
                        </div>

                        <div className="open-block">
                              <div className="open-title">
                                    SATURDAY
                              </div>
                              <div className="open-subtitle">9am - 7pm</div>
                        </div>

                        <div className="open-block">
                              <div className="open-title">
                                    SUNDAY
                              </div>
                              <div className="open-subtitle">10am - 5pm</div>
                        </div>

                        
                        {/* <div className="columns-wrapper">
                              <div className="column">
                              <FontAwesomeIcon icon="phone-volume" />
                                    <p>718 292 1898</p>

                                    <p>
                                     Just Call !
                                   </p>                            
                              </div>

                              <div className="column">
                              <FontAwesomeIcon icon="map-marker-alt" /> 
                                    <p>483 Willis Ave, Bronx, New York</p>

                                    <p>
                                     Trains and buses are available.
                                    </p>                         
                              </div>

                              <div className="column">  
                              <FontAwesomeIcon icon="clock" />     
                                    <p>9AM - 7PM</p>
                               <p>
                                     Keep the time !
                               </p>
                         </div>
                              
                        </div> */}
                  </div>
            );
      }
}