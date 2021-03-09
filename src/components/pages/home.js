import React, { Component } from 'react';

import Logo from '../../../static/assets/images/background/kid3.jpg';
import Header from '../headernavbar/header';
import Navbar from '../headernavbar/navbar';
import Footer from "../navigation/footer";
import Location from "../pages/location";
import Video from "../pages/video";
import Footer2 from "../navigation/footer2";
//import ShopDesign from "../pages/ShopDesign";



//import Home from "../../pages/home";
import Services from "../pages/services";
import Appointment from "../pages/appointment";


class Home extends Component {
    render() {
        return (
            <div>
            

                <Header />
                <Navbar />
                <div className="hero-section">
                        <div className="top-heading">
                            <img src={Logo} width="500" alt="logo" />
                              {/* <h2>Unisex !</h2> */}
                        </div>
                  
                  </div> 
                  <Footer />
                <Location />
                
                <Video />
                <Footer2 />
                {/* <ShopDesign /> */}
            
            </div>
        )
    }
}

export default Home;