import React from 'react';
import { FaCartPlus } from 'react-icons/fa';
//import Design from '../pages/design';

export default function Main(props) {
      const { designs } = props;
      return (
            <main className="block col-2">
                  <h2>Designs</h2>
                  <div className="row">
                  <div className="design2">
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
                                <img className='design121-img' src="../../../static/assets/images/design121.jpg" alt=""/>
                                    <button className="bag-btn" data-id="1">
                                          <FaCartPlus /> add to bag
                                    </button> 
                                 </div>
                                 <h3>Knotless</h3>
                                 <h4>$180</h4>
                             </div>
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
                        {/* {designs.map((design) => (
                              <Design key={design.id} design={design} onAdd={onAdd}></Design>
                        ))}   */}
                  </div>
                  {/* <Design/> */}
            </main>
      );
}