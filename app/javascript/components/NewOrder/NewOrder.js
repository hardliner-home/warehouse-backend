import React from "react"
import Select from 'react-select'
import PropTypes from "prop-types"
import axios from 'axios'

class NewOrder extends React.Component {

    state = {
        warehouse: null,
        products: [],
        selectedProduct: {},
        selectedCount: null
    }

    static propTypes = {
        warehouses: PropTypes.array,
        storeId: PropTypes.number
    }

    convertForSelect = (data) => {
        return data.map((dataElement, i) => {
            let element = {}
            if (!dataElement.title) {
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
    }

    getWarehouseProducts = (e) => {

        axios.get(`/warehouses/${ e.value }/products`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json; charset=utf-8'
            }
        })
            .then(response => {
                this.setState({ products: response.data, warehouse: e.value })
            })
            .catch(error => {
                console.log(error)
            })
    }

    setSelectedProduct = (e) => {

        const product = this.state.products.filter((prod) => {
            return prod.id == e.value
        })
        this.setState({ selectedProduct: product[0] })
    }

    checkProductExistance = (e) => {

        if (isFinite(e.target.value)) {
            if(e.target.value >= 1 && e.target.value <= this.state.selectedProduct.count) {
                console.log('NORMALNO')
                this.setState({selectedCount: e.target.value})
            } else {
                console.log('ti eblan? ne podhodit', this.state.selectedProduct.count)
            }
        } else {
            console.log('dai chislo, daun')
        }
    }

    makeNewOrder = () => {
        axios.post(`/stores/${ this.props.storeId }/orders`, {
            store: this.props.storeId,
            warehouse: this.state.warehouse,
            productId: this.state.selectedProduct.id,
            count: this.state.selectedCount
        })
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
    }

    render () {
        const { warehouses } = this.props
        const { products,selectedCount } = this.state
        const { convertForSelect, getWarehouseProducts, checkProductExistance, setSelectedProduct, makeNewOrder } = this

        return (
            <div className='product-list'>
                <p>Create new order</p>

                <p>Choose warehouse</p>
                <Select
                    options={ convertForSelect(warehouses) }
                    onChange={ getWarehouseProducts }
                    required />

                <p>Choose product</p>
                <Select
                    options={ convertForSelect(products) }
                    onChange={ setSelectedProduct }
                    required />

                <p>Choose product</p>
                <input
                    type="text"
                    className='form-control'
                    onChange={ checkProductExistance }
                    required />

                <button
                    className='btn btn-primary'
                    onClick={ makeNewOrder } >
                        Make order
                </button>
                <button className='btn'>Cancel</button>
            </div>
        )
  }
}

export default NewOrder
