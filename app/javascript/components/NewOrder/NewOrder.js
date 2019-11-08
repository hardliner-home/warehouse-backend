import React from "react"
import Select from 'react-select'
// import PropTypes from "prop-types"
import axios from 'axios'

class NewOrder extends React.Component {

    state = {
        warehouse: null,
        products: [],
        selectedProductId: null
    };

    convertForSelect = (data) => {
        const convertedData = data.map((dataElement, i) => {
            let element = {}
            if (Array.isArray(data)) {
                element = {
                    value: dataElement,
                    label: dataElement
                }
            } else {
                element = {
                    value: dataElement.id,
                    label: dataElement.title
                }
            }
            return element
        })
        return convertedData
    }

    getWarehouseProducts = (e) => {
        // console.log(e.value)

        axios.get(`http://localhost:3000/warehouses/${ e.value }/products`, { // http://localhost:3000/stores/${this.props.storeId}/orders/new
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json; charset=utf-8'
            }
        })
            .then(response => {
                // console.log(response.data)
                this.setState({ products: respont.data })
            })
            .catch(error => {
                console.log(error)
            })

        // fetch(`http://localhost:3000/stores/${this.props.storeId}/orders/new`)
        //     .then(response => {
        //         console.log(response)
        //     })
        //     .catch(error => {
        //         console.log(error)
        //     })

        this.setState({ warehouse: e.value })
    };

    checkProductExistance = (e) => {
        console.log(e.value)
        // this.setState({ selectedProductId: e.value })
    }

    render () {
        const { warehouses } = this.props
        const { warehouse, products } = this.state
        const { convertForSelect, getWarehouseProducts, checkProductExistance } = this

        return (
            <div className='product-list'>
                <p>Create new order</p>

                <p>Choose warehouse</p>
                <Select
                    options={ convertForSelect(warehouses) }
                    onChange={ getWarehouseProducts } />

                <p>Choose product</p>
                <Select
                    options={ convertForSelect(products) }
                    onChange={ checkProductExistance } />
            </div>
        )
  }
}

export default NewOrder
