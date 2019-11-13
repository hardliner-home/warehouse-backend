import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import axios from 'axios'

class Order extends React.Component {

    static PropTypes = {
        order: PropTypes.object,
        product: PropTypes.object
    }

    accept = () => {
        axios({
            method: 'PUT',
            url: `/orders/${this.props.order.id}`,
            data: {
                status: 'true'
            }
        })
            .then(response => {
                console.log(response);
                window.location.href = '/orders'
            })
            .catch(error => {
                console.log(error)
            })

    }


    decline = () => {
        console.log('declined')
    }

    render() {
        const { order, product } = this.props
        const { accept, decline } = this
        console.log(order)

        return(
            <div className='order-info'>
                <p>Order № { order.id }</p>
                <p>From { order.store_id } store</p>
                <p>Product name: { product.title } </p>
                <p>Count: { order.count } </p>
                <p>Time: { moment(order.created_at).format('DD-MM-YYYY HH:MM') }</p>
                <p>Status: { order.status ? 'Accepted' : 'Waiting for response' }</p>
                {
                    order.status ? <button className='btn btn-warning'>Delete</button> :
                        <div>
                            <button
                                className='btn btn-success'
                                onClick={accept}
                            >Accept
                            </button>
                            <button
                                className='btn btn-warning'
                                onClick={decline}
                            >Decline
                            </button>
                        </div>
                }

            </div>
        )
    }
}

export default Order;