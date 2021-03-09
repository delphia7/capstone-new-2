import React, { Component } from 'react';

class ShopDesign extends Component {
      render() {
            //selection of elements/declaration of variables
            //const {_id, title, image, price } = this.props;

            const cartBtn = document.querySelector(".cart-icon-btn");
            const closeCartBtn = document.querySelector(".close-cart");
            const clearCartBtn = document.querySelector(".clear-cart");
            const cartDOM = document.querySelector(".cart");
            const cartOverlay = document.querySelector(".cart-overlay");
            const cartItems = document.querySelector(".cart-items");
            const cartTotal = document.querySelector(".cart-total");
            const cartContent = document.querySelector(".cart-content");
            const designsDOM = document.querySelector(".designs-center");

            //creation of cart item
            let cart = []; //(main cart)

            return (
                  //getting the designs 
                  <div className="shop-designs">
                        async  getDesigns() {
                              try {
                                    let result = await  fetch("designs.json")
                                    let data = await result.json()
                                    return data
                              }     catch (err {
                                    console.log(err)  
                              }
                        }
                  </div>
                  //display designs
                 //  <div className="UI"></div>
                  // //local storage
                  // <div className="storage"></div>
                  // document.addEventListener("DOMContentLoaded",()=>{
                  //       const ui = new UI();
                  //       const designs = new designs();
                  // });
                  //get all designs
      designs.getDesigns().then(data => console.log(data));
            //      <div className="shop-design">
            //             <div className="shop-design__title">
            //                   {title}
            //             </div>
            //             <div className="shop-design__image">
            //                   {image}
            //             </div>
            //             <div clasName="shop-design__price">
            //                   {price}
            //             </div>
            //      </div> 
            )
      }
}

export default ShopDesign;