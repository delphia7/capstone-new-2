import React, { Component } from 'react';

class CartFooter extends Component {
      render() {
            return (
                 <div className="cart-footer">
                       <h3>your total : $ <div className="cart-total">0</div></h3>
                       <button className="clear-cart banner-btn">clear cart</button>
                 </div> 
            )
      }
}

export default CartFooter;
