import React from 'react';

export default function Product(props) {
      const {design} = props;
      return (
            <div>
                  <img className="small" src={design.image} alt={design.name}></img>
                  <h3>{design.name}</h3>
                  <div>${design.price}</div>
                  <div>
                        <button>Add To Cart</button>
                  </div>
                        
            </div>
      );
}

// import React, { Component } from "react";

// class Products extends Component {
//       componentDidMount() {
//         this.props.fetchProducts();
//       }
//       render() {
//         const productItems = this.props.products.map((product) => (
//           <div className="col-md-4" key={product.id}>
//             <div className="thumbnail text-center">
//               <a
//                 href={`#${product.id}`}
//                 onClick={(e) => this.props.addToCart(this.props.cartItems, product)}
//               >
//                 <img src={`products/${product.sku}_2.jpg`} alt={product.title} />
//                 <p>{product.title}</p>
//               </a>
//               <b>{util.formatCurrency(product.price)}</b>
//               <button
//                 className="btn btn-primary"
//                 onClick={(e) => this.props.handleAddToCart(e, product)}
//               >
//                 Add to cart
//               </button>
//             </div>
//           </div>
//         ));
    
//         return <div className="row">{productItems}</div>;
//       }
//     }
//     const mapStateToProps = (state) => ({
//       products: state.products.filteredItems,
//       cartItems: state.cart.items,
//     });
//     export default connect(mapStateToProps, { fetchProducts, addToCart })(Products);