import React from 'react'
import PropTypes from 'prop-types'

class UserOrders extends React.Component {


    static propTypes = {
        userOrders: PropTypes.object.isRequired
    }

    render() {
        const { userOrders, storeId } = this.props
        console.log(userOrders)

        return(
            <div>
                {
                    !userOrders ?
                        <p>No orders</p> :
                        <div>
                            <table className="table">
                                <thead>
                                <tr>
                                    <th scope="col">id</th>
                                    <th scope="col">To store</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">Actions</th>
                                </tr>
                                </thead>
                                <tbody>
                                {
                                    userOrders.map((userOrder, i) =>
                                        <tr key={i}>
                                            <th scope="row">{ userOrder.id }</th>
                                            <td>{ userOrder.store_id }</td>
                                            <td>
                                                <h4><span className="badge badge-secondary">{ userOrder.status ? 'In process' : 'Accepted' }</span></h4>
                                            </td>
                                            <td>
                                                <button
                                                   className='btn btn-primary'
                                                    onClick={
                                                        () => window.location.href = `/orders/${userOrder.id}`
                                                    }
                                                >Show
                                                </button>
                                            </td>
                                        </tr>
                                    )
                                }
                                </tbody>
                            </table>
                        </div>
                }
            </div>


            // {/*<div>*/}
            // {/*    { !userOrders ?*/}
            // {/*        <p>No orders</p> :*/}
            // {/*        userOrders.map((userOrder, i) =>*/}
            // {/*            <div*/}
            // {/*                key={i}*/}
            // {/*                >*/}
            // {/*                */}
            // {/*                */}
            // {/*                <p>Order to { userOrder.store_id } store</p>*/}
            // {/*                <button*/}
            // {/*                    className='btn btn-primary'*/}
            // {/*                    onClick={*/}
            // {/*                        () => window.location.href = `/orders/${ userOrder.id }`*/}
            // {/*                    }*/}
            // {/*                    >Show*/}
            // {/*                </button>*/}
            // {/*                <h4><span className="badge badge-secondary">{ userOrder.status ? 'In process' : 'Accepted' }</span></h4>*/}
            // {/*            </div>*/}
            // {/*        )*/}
            // {/*    }*/}
            // {/*</div>*/}
        )
    }
}

export default UserOrders