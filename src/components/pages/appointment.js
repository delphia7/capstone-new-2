import React, { Component } from 'react';

import HeaderDesign from "../pages/headerDesign";
import MainDesign from "../pages/mainDesign";
import Basket from "../pages/basket";
import data from "../pages/data";
import { useState } from 'react';
//import Design from '../pages/design';

const { designs, cartItems} = data;

class Appointment extends Component {
    //const (cartItems, setCartItems) : useState{[]}; //cartItems is empty
    const (cartItems, setCartItems) : useState{[]};
    
    render() {
        // const onAdd = (design) => {
        //     const exist = cartItems.find(x.id === design.id)
        //     if(exist) {
        //         setCartItems(
        //             cartItems.map(x => 
        //                 x.id === design.id ? { ...exist, qty: exist.qty + 1 } : x
        //             )
        //         );
        //     } else {
        //         setCartItems([...cartItems, { ...design, qty: 1}]);
        //     }
        // };
        return (
            <div>
               <HeaderDesign /> 
               <div className="row">
                <MainDesign designs={designs}></MainDesign> 
                <data /> 
                <Basket cartItems>{cartItems}</Basket>
                 {/* <Design />  */}
               </div>
                  
            </div>
        );
    }
}

export default Appointment;
