import React, { Component } from 'react';

class Total extends Component {
    render() {
      const { className, total } = this.props;
      return (
            <div className={`${className} total`}>
                  <div className="total__count">
                        {total}
                  </div>
                  <div className="total__plus">
                        <i class="fas fa-plus"></i>
                  </div>
                  <div className="total__minus">
                        <i class="fas fa-minus"></i>
                  </div>
            </div>
        )
    }
}

export default Total;