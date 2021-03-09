import React, { Component } from 'react';
//variables

            const cartBtn = document.querySelector(".cart-icon-btn");
            const closeCartBtn = document.querySelector(".close-cart");
            const clearCartBtn = document.querySelector(".clear-cart");
            const cartDOM = document.querySelector(".cart");
            const cartOverlay = document.querySelector(".cart-overlay");
            const cartItems = document.querySelector(".cart-items");
            const cartTotal = document.querySelector(".cart-total");
            const cartContent = document.querySelector(".cart-content");
            const designsDOM = document.querySelector(".designs-center");

class ShopDesign extends Component {
      render() {
            
            //const { className } = this.props;

            //creation of cart item
            let cart = []; //(main cart)
            return (
                  <div className='designs'>
                       async getDesigns() {
            try {
                  let result = await fetch('designs.json')
                  let data =  await result.json()
                  let designs = data.items;
                  designs = designs.map(item =>{
                        const {title,price} = item.fields
                        const {id} = item.sys
                        const image = item.fields.image.fields.file.url
                        return {title,price,id,image}
                  })
                  return designs
            } catch (error) {
            console.log(error)
            }
      }   
                  </div>
            )
      }
}
............
class displayDesign extends Component {
      render() {
            return (
                  class UI {
                        displayDesigns(designs) {
                              let result = '';
                              designs.forEach(design => {
                                    result +=
                                    `
                                     {/* (single design ) */}
                              //        <div className="design">
                              //        <div className="img-container">
                              //            <img className='design1-img' src=${design.image} alt="design"/>
                              //            <button className="bag-btn" data-id=${design.id}>
                              //                <FaCartPlus /> add to bag
                              //            </button> 
                              //         </div>
                              //         <h3>${design.title}</h3>
                              //         <h4>$${design.price}</h4>
                              //     </div>
                              `;
                              });
                              designsDOM.innerHTML = result;
                        }
                        getBagButtons(){
                              const buttons = [...document.querySelectorAll(".bag-btn")
                        ]; button.
                        buttons.forEach(button =>{
                              let id = button.dataset.id;
                              let inCart = cart.find(item => item.id ===id);
                              if (inCart) {
                                    button.innerText = "In Cart";
                                    button.disabled = true
                              }
                              
                                    button.addEventListener("click", event => {
                                          event.target.innerText = "In Cart";
                                          event.target.disabled = true;
                                          // get design from designs
                                          let cartItem = { ...Storage.getDesign(id), amount: 1 };
                                          // add design to the cart
                                          cart = [...cart, cartItem];
                                          // save cart in local storage
                                          Storage.saveCart(cart)
                                          // set cart values
                                          this.setCartValues(cart);
                                          // dispaly cart item
                                          this.addCartItem(cartItem);
                                          // show the cart
                                    });
                              });
                        }
                        
                        
            )
      }
}


export default ShopDesign;
  



class ShopDesign extends Component {
render() {
//creation of cart item
let cart = []; //(main cart)
            
// getting the designs
 class Designs {
      async getDesigns() {
            try {
                  let result = await fetch('designs.json');
                  let data =  await result.json();
                  let designs = data.items;
                  designs = designs.map(item =>{
                        const {title,price} = item.fields;
                        const {id} = item.sys
                        const image = item.fields.image.fields.file.url;
                        return {title,price,id,image}
                  })
                  return designs
            } catch (error) {
            console.log(error);
            }
      }
}
// display designs
class UI {
      displayDesigns(designs) {
            let result = '';
            designs.forEach(design => {
                  result +=
                  `
                   {/* (single design ) */}
            //        <div className="design">
            //        <div className="img-container">
            //            <img className='design1-img' src=${design.image} alt="design"/>
            //            <button className="bag-btn" data-id=${design.id}>
            //                <FaCartPlus /> add to bag
            //            </button> 
            //         </div>
            //         <h3>${design.title}</h3>
            //         <h4>$${design.price}</h4>
            //     </div>
            `;
            });
            designsDOM.innerHTML = result;
      }
      getBagButtons(){
            const buttons = [...document.querySelectorAll(".bag-btn")
      ]; button.
      buttons.forEach(button =>{
            let id = button.dataset.id;
            let inCart = cart.find(item => item.id ===id);
            if (inCart) {
                  button.innerText = "In Cart";
                  button.disabled = true
            }
            
                  button.addEventListener("click", event => {
                        event.target.innerText = "In Cart";
                        event.target.disabled = true;
                        // get design from designs
                        let cartItem = { ...Storage.getDesign(id), amount: 1 };
                        // add design to the cart
                        cart = [...cart, cartItem];
                        // save cart in local storage
                        Storage.saveCart(cart)
                        // set cart values
                        this.setCartValues(cart);
                        // dispaly cart item
                        this.addCartItem(cartItem);
                        // show the cart
                  });
            });
      }
      setCartValue(cart) {
            let tempTotal = 0;
            let itemsTotal = 0;
            cart.map(item => {
                  tempTotal += item.price * item.amount;
                  itemsTotal += item.amount
            });
            cartTotal.innerText = parseFloat(tempTotal.toFixed(2));
            cartItems.innerText = itemsTotal;
      }
      addCartItem(item) {

      }
}
// local storage
class Storage {
      static saveDesigns(designs) {
            localStorage.setItem("designs", JSON.stringify(designs));
      }
      static getDesign(id) {
            let designs = JSON.parse(localStorage.getItem("designs"));
            return designs.find(design => design.id === id);
      }
      static saveCart(cart) {
            localStorage.setItem("cart", JSON.stringify(cart));
      }
}

document.addEventListener("DOMContentLoaded", () => {
      const ui = new UI();
      const designs = new Designs();

// get all designs
designs.getDesigns().then(designs => {
      ui.displayDesigns(designs);
Storage.saveDesigns(designs);
}).then(() => {
 ui.getBagButtons();
});
            
 });
      
export default ShopdDesign;