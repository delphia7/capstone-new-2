import React, { Component } from 'react';

function CartButton({className, icon}) {
      return (
            <div className={`${className} cart-button`}>
                  <i className={icon}/>
            </div>
      )
}

function CartContent({className, designs}) {
      let count = designs.length;
      let designsJSX = designs.map(design => <h1 key={design}>{design}</h1>)
      return (
            <div className={`${className} cart-content`}>
                  <div className='cart-content__title'>
                        Cart ({count})
                  </div>
                  <div className='cart-content__designs'>
                        {designsJSX}
                  </div>
                  <div>
                        <CartFooter className='cart-content__footer' designs={designs}/>
                  </div>
            </div>
            
      )
}

function CartFooter({className, designs}) {
      const price = 40;
      return (
            <div className={`${className} cart-footer`}>
                  <a className='cart-footer__checkout'>
                        Checkout
                  </a>
                  <div className='cart-footer__subtotal'>
                        Subtotal
                  </div>
                  <div className='cart-footer__price'>
                        ${price}
                  </div>
            </div>
      )
}

class ShopCart extends Component {
      render() {
            const { className } = this.props;
            return (
                  <div className={`${className} shop-cart`}>
                        <CartButton className='shop-cart__toggle' icon='fas fa-times'/>
                        <CartContent classNname='shop-cart__content' designs={[123, 4323, 3245]}/>
                  </div>
            )
      }
}

export default ShopCart;

{/* <div className="cart-overlay">
                              <div className="cart">
                                    {/* <div className="close-cart"> */}
                                       // <FaWindowClose />
                                        //<h2>your cart</h2>
                                        {/* <div className="cart-content"> */}
                                        {/* -------- cart item ------------ */}
                                            {/* <div className="cart-item"> */}
                                              //  <img className='design10-img' src="../../../static/assets/images/design10.jpg" alt="log10"/> 
                                                {/* ------let create a div wth title, price n remove option..........    */}
                                                {/* <div className="d1">
                                                    <h4>Ponitel</h4>
                                                    <h5>$90</h5>
                                                    <div className="remove-item">
                                                        remove
                                                    </div>
                                                </div>  */}

                                                {/* -----counting same item nber------ */}
                                                 {/* <div className="count-icon">
                                                    <div className="icon-plus"><FaPlus /></div>    
                                                <p className="item-amount">1</p>
                                                    <div className="icon-minus"><FaMinus /></div>
                                                </div> 
                                             </div>  */}
                                            {/* ----End of cart item ------------- */}
                                             {/* <div className="cart-footer">
                                            <h3>your total : $0 <div className="cart-total">0</div></h3>
                                                <button className="clear-cart banner-btn">clear cart</button>
                                            </div>   */}
                                        {/* </div> */}
                                    {/* </div> */}
                              {/* </div> */}

                            </div>
                        </div>  */}