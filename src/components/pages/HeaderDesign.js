 import React, { Component } from 'react';

 class HeaderDesign extends Component {
      render() {
             const { className } = this.props;
             return(
                  <header className="row block center">
                        <div>
                              <a href="#/">
                                    <h1> Shopping Cart</h1>
                              </a>
                        </div>
                        <div>
                              <a href="#/cart">Cart</a> <a href="#/signin">SignIn</a>
                        </div>
                  </header>
                        
         )
     }
 }

 export default HeaderDesign;


// import React from 'react';

// export default function HeaderDesign(props) {
//       return (
//             <header className="row block center">
//                   <div>
//                         <a href="#/">
//                               <h1> Shopping Cart</h1>
//                         </a>
//                   </div>
//                   <div>
//                         <a href="#/cart">Cart</a> <a href="#/signin">SignIn</a>
//                   </div>
//             </header>
//       );
// }

