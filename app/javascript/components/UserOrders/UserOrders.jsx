import React from 'react'
import PropTypes from 'prop-types'

class UserOrders extends React.Component {

    // constructor(props) {
    //     super(props)
    //
    //     this.state = {
    //         VARIABLE: VALUE
    //     }
    // }

    static propTypes = {
        userOrders: PropTypes.object.isRequired
    }

    render() {
        const { userOrders, storeId } = this.props
        console.log(userOrders)

        return(
            <div>
                { !userOrders ?
                    <p>No orders</p> :
                    userOrders.map((userOrder, i) =>
                        <div
                            key={i}
                            >
                            <p>Order to { userOrder.store_id } store</p>
                            <button
                                className='btn btn-primary'
                                onClick={
                                    () => window.location.href = `/orders/${ userOrder.id }`
                                }
                                >Show
                            </button>
                        </div>
                    )
                }
            </div>
        )
    }
}

export default UserOrders