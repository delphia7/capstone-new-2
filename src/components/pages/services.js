import React, { Component } from 'react';

//import ShopCart from "./../pages/shopCart";
//import Data1 from "../pages/data1";

import { FaBars, FaCartPlus, FaWindowClose, FaPlus, FaMinus } from 'react-icons/fa';
import Logo1 from '../../../static/assets/images/design1.jpg';
import Logo from '../../../static/assets/images/design3.jpg';
import Log12 from '../../../static/assets/images/design7.jpg';
import Log13 from '../../../static/assets/images/design2.jpg';
import Log14 from '../../../static/assets/images/design44.jpg';
import Log11 from '../../../static/assets/images/design33.jpg';
import Log10 from '../../../static/assets/images/design4.jpg';
import Log2 from '../../../static/assets/images/design41.jpg';
import Lo3 from '../../../static/assets/images/design9.jpg'
import Log from '../../../static/assets/images/design11.jpg';
import Log5 from '../../../static/assets/images/design10.jpg';
import Log4 from '../../../static/assets/images/design21.jpg';
import Log24 from '../../../static/assets/images/design121.jpg';
import Log21 from '../../../static/assets/images/design12.jpg';
import Log22 from '../../../static/assets/images/design122.jpg';
import Log61 from '../../../static/assets/images/design5.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


class Services extends Component {
    render() {
        return (
            <div>
                <div className='navbar-wrapper'>
                    <div className="left-side">
                        <FaBars />

                    </div>

                    <div className="nav-center">
                        <h3>Our Services</h3>
                    </div>

                    <div className="right-side">
                        <div className="cart-icon-btn">
                            <FaCartPlus />
                        <div className="cart-items">0</div>
                        </div>
                    </div>
                      {/* <Data1 />   */}
                </div>

                    {/* home page/top  */}
                    <div className="hero-section">
                        <div className="banner-section">
                            <h2 class="banner-title">our hairstyles</h2>
                                <button class="banner-btn">book now</button>
                        </div>
                    </div>
                    {/*  designs  */}
                    <div className="designs">
                        <div className="section-title">
                            <h2>our designs</h2>
                        </div>
                        <div className="designs-center">
                             {/* (single design ) */}
                            <div className="design">
                                <div className="img-container">
                                    <img className='design1-img' src="../../../static/assets/images/design1.jpg" alt=""/>
                                    <button className="bag-btn" data-id="1">
                                        <FaCartPlus /> add to bag
                                    </button> 
                                 </div>
                                 <h3>men cornrows</h3>
                                 <h4>$40</h4>
                             </div>
                             {/* single hairstyle-design  */}
                            <div className="design">
                                <div className="img-container">
                                    <img className='design2-img' src="../../../static/assets/images/design2.jpg" alt="log13"/>
                                    <button className="bag-btn" data-id="1">
                                        <FaCartPlus /> add to bag
                                    </button> 
                                 </div>
                                 <h3>Box Braid</h3>
                                 <h4>$60</h4>
                             </div>
                             {/* single hairstyle-design  */}
                            <div className="design">
                                <div className="img-container">
                                    <img className='design7-img' src="../../../static/assets/images/design7.jpg" alt="log12"/>
                                    <button className="bag-btn" data-id="1">
                                        <FaCartPlus /> add to bag
                                    </button> 
                                 </div>
                                 <h3>Knotless</h3>
                                 <h4>$180</h4>
                             </div>
                             {/* single hairstyle  */}
                            <div className="design">
                                <div className="img-container">
                                    <img className='design3-img' src="../../../static/assets/images/design3.jpg" alt=""/>
                                    <button className="bag-btn" data-id="1">
                                        <FaCartPlus /> add to bag
                                    </button> 
                                 </div>
                                 <h3>women cornrows</h3>
                                 <h4>$80</h4>
                             </div>

                             {/* single hairstyle  */}
                            <div className="design">
                                <div className="img-container">
                                    <img className='design44-img' src="../../../static/assets/images/design44.jpg" alt=""/>
                                    <button className="bag-btn" data-id="1">
                                        <FaCartPlus /> add to bag
                                    </button> 
                                 </div>
                                 <h3>Two Braids No Ext</h3>
                                 <h4>$25</h4>
                             </div>

                             {/* single hairstyle  */}
                            <div className="design">
                                <div className="img-container">
                                    <img className='design33-img' src="../../../static/assets/images/design33.jpg" alt=""/>
                                    <button className="bag-btn" data-id="1">
                                        <FaCartPlus /> add to bag
                                    </button> 
                                 </div>
                                 <h3>Dread Locks</h3>
                                 <h4>$70</h4>
                             </div>

                             {/* single hairstyle  */}
                            <div className="design">
                                <div className="img-container">
                                    <img className='design4-img' src="../../../static/assets/images/design4.jpg" alt=""/>
                                    <button className="bag-btn" data-id="1">
                                        <FaCartPlus /> add to bag
                                    </button> 
                                 </div>
                                 <h3>Kiki Twist</h3>
                                 <h4>$120</h4>
                             </div>

                             {/* single hairstyle  */}
                            <div className="design">
                                <div className="img-container">
                                    <img className='design41-img' src="../../../static/assets/images/design41.jpg" alt=""/>
                                    <button className="bag-btn" data-id="1">
                                        <FaCartPlus /> add to bag
                                    </button> 
                                </div>
                                 <h3>Lemonade Cornrows</h3>
                                 <h4>$80</h4>
                            </div>

                            {/* single hairstyle  */}
                            <div className="design">
                                <div className="img-container">
                                    <img className='design11-img' src="../../../static/assets/images/design11.jpg" alt=""/>
                                    <button className="bag-btn" data-id="1">
                                        <FaCartPlus /> add to bag
                                    </button> 
                                </div>
                                 <h3>Big Knotless</h3>
                                 <h4>$120</h4>
                            </div>

                            {/* single hairstyle  */}
                            <div className="design">
                                <div className="img-container">
                                    <img className='design9-img' src="../../../static/assets/images/design9.jpg" alt=""/>
                                    <button className="bag-btn" data-id="1">
                                        <FaCartPlus /> add to bag
                                    </button> 
                                </div>
                                 <h3>Men Design</h3>
                                 <h4>$70</h4>
                            </div>

                            {/* single hairstyle  */}
                            <div className="design">
                                <div className="img-container">
                                    <img className='design10-img' src="../../../static/assets/images/design10.jpg" alt=""/>
                                    <button className="bag-btn" data-id="1">
                                        <FaCartPlus /> add to bag
                                    </button> 
                                </div>
                                 <h3>Ponitel</h3>
                                 <h4>$90</h4>
                            </div>

                            {/* single hairstyle  */}
                            <div className="design">
                                <div className="img-container">
                                    <img className='design21-img' src="../../../static/assets/images/design21.jpg" alt=""/>
                                    <button className="bag-btn" data-id="1">
                                        <FaCartPlus /> add to bag
                                    </button> 
                                </div>
                                 <h3>Senegalese Twist</h3>
                                 <h4>$100</h4>
                            </div>

                            {/* single hairstyle  */}
                            <div className="design">
                                <div className="img-container">
                                    <img className='design121-img' src="../../../static/assets/images/design121.jpg" alt=""/>
                                    <button className="bag-btn" data-id="1">
                                        <FaCartPlus /> add to bag
                                    </button> 
                                </div>
                                 <h3>Long Senegalese Twist</h3>
                                 <h4>$180</h4>
                            </div>

                            {/* single hairstyle  */}
                            <div className="design">
                                <div className="img-container">
                                    <img className='design122-img' src="../../../static/assets/images/design122.jpg" alt=""/>
                                    <button className="bag-btn" data-id="1">
                                        <FaCartPlus /> add to bag
                                    </button> 
                                </div>
                                 <h3>Two braids</h3>
                                 <h4>$25</h4>
                            </div>

                            {/* single hairstyle  */}
                            <div className="design">
                                <div className="img-container">
                                    <img className='design12-img' src="../../../static/assets/images/design12.jpg" alt=""/>
                                    <button className="bag-btn" data-id="1">
                                        <FaCartPlus /> add to bag
                                    </button> 
                                </div>
                                 <h3>Fake dread locs</h3>
                                 <h4>$250</h4>
                            </div>

                            

                            {/* single hairstyle  */}
                            <div className="design">
                                <div className="img-container">
                                    <img className='design5-img' src="../../../static/assets/images/design5.jpg" alt=""/>
                                    <button className="bag-btn" data-id="1">
                                        <FaCartPlus /> add to bag
                                    </button> 
                                </div>
                                 <h3>box braids</h3>
                                 <h4>$60</h4>
                            </div>
{/* 
                            {/* ---------Cart----------- */}
                            {/* <div className="cart-overlay">
                                <div className="cart">
                                    <div className="close-cart">
                                        <FaWindowClose />
                                        <h2>your cart</h2>
                                        <div className="cart-content">
                                        {/* -------- cart item ------------ */}
                                            {/* <div className="cart-item">
                                                <img className='design10-img' src="../../../static/assets/images/design10.jpg" alt="log10"/> 
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
                                             </div> 
                                            {/* ----End of cart item ------------- */}
                                             {/* <div className="cart-footer">
                                            <h3>your total : $0 <div className="cart-total">0</div></h3>
                                                <button className="clear-cart banner-btn">clear cart</button>
                                            </div>   */}
                                        </div> 
                                    {/* </div> */}
                                {/* </div> */}

                            {/* </div>  */}
                        {/* </div>   */}
                    </div>
            </div>
        
        )
    }
}

export default Services;