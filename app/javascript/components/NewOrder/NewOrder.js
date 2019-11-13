import React from "react";
import Select from 'react-select';
import PropTypes from "prop-types";
import axios from 'axios';

import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import './NewOrder.scss'

toast.configure({
    autoClose: 3000
})


class NewOrder extends React.Component {

    state = {
        warehouse: null,
        products: [],
        selectedProduct: {},
        selectedCount: null,
        error: ''
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
                // console.log(response.data)
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
        console.log(this.state)
        if (
            this.state.warehouse !== null &&
            this.state.selectedProduct !== {} &&
            this.state.selectedCount !== null
        ) {
            axios.post(`/stores/${ this.props.storeId }/orders`, {
                store_id: this.props.storeId,
                product_id: this.state.selectedProduct.id,
                count: this.state.selectedCount
            })
                .then(response => {
                    // if (response.status == 200) {
                        console.log('123123123123213')

                        document.location.href = `/stores/${ this.props.storeId }/orders`
                    // }
                    // console.log(response)
                })
                .catch(error => {
                    console.log(error)
                })
        } else {

            toast.error('Wrong data in inputs. Please, check it', {
                autoClose: 3000
            });
        }

    }

    render () {
        const { warehouses, storeId } = this.props
        const { products, selectedCount } = this.state
        const { convertForSelect, getWarehouseProducts, checkProductExistance, setSelectedProduct, makeNewOrder } = this

        return (
            <div className='product-list'>
                <ToastContainer
                    autoClose={3000}
                />

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
                <button
                    className='btn'
                    onClick={
                        () => window.history.back()
                    }>Cancel</button>
            </div>
        )
  }
}

export default NewOrder
