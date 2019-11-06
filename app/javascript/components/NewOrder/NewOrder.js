import React from "react"
import PropTypes from "prop-types"

class NewOrder extends React.Component {
  // constructor(props) {
  //   super(props)
  // }

  render () {
    const { products } = this.props
    return (
        <div className='product-list'>
          {products.map((product, i) =>
            <div className='prod' key={i}>{product.title}</div>
          )}
        </div>
    )
  }
}

// NewOrder.propTypes = {
//   products: PropTypes.array,
//   warehouses: PropTypes.array
// };

export default NewOrder
